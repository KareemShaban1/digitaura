#!/usr/bin/env node
/**
 * Copies projects from the portfolio at kareem-shaban.com into this repo.
 *
 *   npm run sync:projects
 *
 * - Data   -> src/data/projects.json
 * - Images -> public/projects/<slug>/<hash>.<ext> (cover, gallery and images
 *             inside the write-up), referenced as /projects/<slug>/... at runtime.
 *
 * Images already on disk are reused (file names come from a hash of the source URL),
 * and image files that are no longer referenced are removed.
 * If the API can't be reached, nothing is changed.
 */
import { createHash } from "node:crypto";
import { mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://kareem-shaban.com";
const API = `${SITE}/api/projects`;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataFile = path.join(root, "src", "data", "projects.json");
const imagesDir = path.join(root, "public", "projects");

const EXT = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg", // non-standard, but sent by the portfolio server
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",
  "image/avif": ".avif",
};

const gradients = {
  "Full Stack": "from-primary/30 to-orange-500/30",
  Backend: "from-green-500/30 to-primary/30",
  Frontend: "from-purple-500/30 to-primary/30",
  Mobile: "from-blue-500/30 to-primary/30",
};

const exists = (p) => stat(p).then(() => true, () => false);

/** Absolute, properly encoded URL for an image reference from the API. */
const resolveUrl = (src) => {
  const url = new URL(src, SITE);
  url.pathname = url.pathname.split("/").map((s) => encodeURIComponent(decodeURIComponent(s))).join("/");
  return url.href;
};

const stats = { downloaded: 0, reused: 0, failed: 0 };
const kept = new Set(); // absolute paths of image files still referenced

/** Downloads one image for a project; returns its public path or null. */
async function downloadImage(slug, src) {
  let url;
  try {
    url = resolveUrl(src);
  } catch {
    console.warn(`  ! ${slug}: invalid image URL ${src}`);
    stats.failed++;
    return null;
  }
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 12);
  const dir = path.join(imagesDir, slug);

  // Reuse an existing download of the same URL.
  if (await exists(dir)) {
    const existing = (await readdir(dir)).find((f) => f.startsWith(`${hash}.`));
    if (existing) {
      kept.add(path.join(dir, existing));
      stats.reused++;
      return `/projects/${slug}/${existing}`;
    }
  }

  try {
    const res = await fetch(url);
    const type = (res.headers.get("content-type") || "").split(";")[0].trim();
    if (!res.ok || !EXT[type]) throw new Error(`HTTP ${res.status} ${type || "unknown type"}`);
    const file = `${hash}${EXT[type]}`;
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, file), Buffer.from(await res.arrayBuffer()));
    kept.add(path.join(dir, file));
    stats.downloaded++;
    return `/projects/${slug}/${file}`;
  } catch (err) {
    console.warn(`  ! ${slug}: skipped ${src} (${err.message})`);
    stats.failed++;
    return null;
  }
}

async function syncProject(p) {
  const categories = p.categories?.length ? p.categories : ["Other"];

  const sources = [p.coverImage, ...(p.gallery ?? [])].filter((s, i, all) => s && all.indexOf(s) === i);
  const images = [];
  for (const src of sources) {
    const local = await downloadImage(p.slug, src);
    if (local && !images.includes(local)) images.push(local);
  }

  // Localise images embedded in the write-up; drop ones that can't be fetched.
  let content = p.content ?? "";
  const embedded = [...content.matchAll(/<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi)];
  for (const [tag, src] of embedded) {
    const local = await downloadImage(p.slug, src);
    content = content.replace(tag, local ? tag.replace(src, local) : "");
  }

  return {
    id: p.slug,
    title: p.name,
    category: categories[0],
    categories,
    description: p.description ?? "",
    content,
    tech: p.tags ?? [],
    year: p.year ?? "",
    images,
    ...(p.siteUrl ? { liveUrl: p.siteUrl } : {}),
    ...(p.repoUrl ? { githubUrl: p.repoUrl } : {}),
    gradient: gradients[categories[0]] ?? "from-primary/30 to-orange-500/30",
  };
}

/** Removes image files and folders that are no longer referenced. */
async function pruneImages() {
  if (!(await exists(imagesDir))) return 0;
  let removed = 0;
  for (const slug of await readdir(imagesDir)) {
    const dir = path.join(imagesDir, slug);
    if (!(await stat(dir)).isDirectory()) continue;
    const files = await readdir(dir);
    for (const f of files) {
      if (!kept.has(path.join(dir, f))) {
        await rm(path.join(dir, f));
        removed++;
      }
    }
    if ((await readdir(dir)).length === 0) await rm(dir, { recursive: true });
  }
  return removed;
}

async function main() {
  console.log(`Fetching ${API}`);
  const res = await fetch(API);
  if (!res.ok) throw new Error(`API responded ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Unexpected API response (expected an array)");

  const projects = [];
  for (const p of data) {
    console.log(`- ${p.name}`);
    projects.push(await syncProject(p));
  }

  await mkdir(path.dirname(dataFile), { recursive: true });
  await writeFile(dataFile, JSON.stringify(projects, null, 2) + "\n");
  const removed = await pruneImages();

  console.log(
    `\nSynced ${projects.length} projects -> ${path.relative(root, dataFile)}\n` +
      `Images: ${stats.downloaded} downloaded, ${stats.reused} unchanged, ` +
      `${stats.failed} skipped, ${removed} removed`,
  );
}

main().catch((err) => {
  console.error(`Sync failed: ${err.message}\nNo files were changed.`);
  process.exit(1);
});
