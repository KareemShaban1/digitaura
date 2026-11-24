#!/usr/bin/env node
/**
 * Copies content from the portfolio at kareem-shaban.com into this repo.
 *
 *   npm run sync:portfolio      (alias: npm run sync:projects)
 *
 * - Projects  -> src/data/projects.json, images in public/projects/<slug>/
 * - Articles  -> src/data/blog.json,     images in public/blog/<slug>/
 * - Facts, skills, timeline and clients -> src/data/site.json,
 *                                          client logos in public/clients/
 *
 * Images already on disk are reused (file names come from a hash of the source URL),
 * and image files that are no longer referenced are removed.
 * All API data is fetched before anything is written, so if the API can't be
 * reached nothing is changed.
 */
import { createHash } from "node:crypto";
import { mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://kareem-shaban.com";
const API = `${SITE}/api`;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "src", "data");
const publicDir = path.join(root, "public");
/** Top-level folders in public/ that this script owns (and prunes). */
const IMAGE_ROOTS = ["projects", "blog", "clients"];

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

/**
 * Downloads one image into public/<folder>/ (e.g. "projects/menu-builder");
 * returns its public path or null.
 */
async function downloadImage(folder, src) {
  if (!src) return null;
  let url;
  try {
    url = resolveUrl(src);
  } catch {
    console.warn(`  ! ${folder}: invalid image URL ${src}`);
    stats.failed++;
    return null;
  }
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 12);
  const dir = path.join(publicDir, ...folder.split("/"));

  // Reuse an existing download of the same URL.
  if (await exists(dir)) {
    const existing = (await readdir(dir)).find((f) => f.startsWith(`${hash}.`));
    if (existing) {
      kept.add(path.join(dir, existing));
      stats.reused++;
      return `/${folder}/${existing}`;
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
    return `/${folder}/${file}`;
  } catch (err) {
    console.warn(`  ! ${folder}: skipped ${src} (${err.message})`);
    stats.failed++;
    return null;
  }
}

/** Localises images embedded in HTML; drops ones that can't be fetched. */
async function localiseHtml(folder, html) {
  let content = html ?? "";
  const embedded = [...content.matchAll(/<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi)];
  for (const [tag, src] of embedded) {
    const local = await downloadImage(folder, src);
    content = content.replace(tag, local ? tag.replace(src, local) : "");
  }
  return content;
}

async function syncProject(p) {
  const folder = `projects/${p.slug}`;
  const categories = p.categories?.length ? p.categories : ["Other"];

  const sources = [p.coverImage, ...(p.gallery ?? [])].filter((s, i, all) => s && all.indexOf(s) === i);
  const images = [];
  for (const src of sources) {
    const local = await downloadImage(folder, src);
    if (local && !images.includes(local)) images.push(local);
  }

  return {
    id: p.slug,
    title: p.name,
    category: categories[0],
    categories,
    description: p.description ?? "",
    content: await localiseHtml(folder, p.content),
    tech: p.tags ?? [],
    year: p.year ?? "",
    images,
    ...(p.siteUrl ? { liveUrl: p.siteUrl } : {}),
    ...(p.repoUrl ? { githubUrl: p.repoUrl } : {}),
    gradient: gradients[categories[0]] ?? "from-primary/30 to-orange-500/30",
  };
}

/** "October 14 , 2026" -> "2026-10-14" (falls back to the original text). */
const toIsoDate = (text) => {
  const d = new Date(String(text ?? "").replace(/\s+,/g, ","));
  if (Number.isNaN(d.getTime())) return text ?? "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const readTime = (html) => {
  const words = (html ?? "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

async function syncArticle(a) {
  const folder = `blog/${a.slug}`;
  const content = await localiseHtml(folder, a.content);
  return {
    id: String(a.id),
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt ?? "",
    content,
    coverImage: (await downloadImage(folder, a.coverImage)) ?? "",
    category: a.category?.name ?? a.categories?.[0] ?? "General",
    publishedAt: toIsoDate(a.date),
    readTime: readTime(content),
    tags: a.tags ?? [],
  };
}

async function syncClient(c) {
  const logo = await downloadImage("clients", c.logo);
  return {
    name: c.name,
    ...(c.website ? { website: c.website } : {}),
    ...(logo ? { logo } : {}),
  };
}

/** Removes image files and folders that are no longer referenced. */
async function pruneImages() {
  let removed = 0;
  const walk = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
        if ((await readdir(full)).length === 0) await rm(full, { recursive: true });
      } else if (!kept.has(full)) {
        await rm(full);
        removed++;
      }
    }
  };
  for (const name of IMAGE_ROOTS) {
    const dir = path.join(publicDir, name);
    if (await exists(dir)) await walk(dir);
  }
  return removed;
}

async function getJson(endpoint) {
  const res = await fetch(`${API}/${endpoint}`);
  if (!res.ok) throw new Error(`${endpoint}: API responded ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error(`${endpoint}: unexpected response (expected an array)`);
  return data;
}

async function writeJson(name, value) {
  const file = path.join(dataDir, name);
  await writeFile(file, JSON.stringify(value, null, 2) + "\n");
  return path.relative(root, file);
}

async function main() {
  console.log(`Fetching ${API}`);
  const [apiProjects, apiArticles, apiClients, apiFacts, apiSkills, apiTimeline] = await Promise.all(
    ["projects", "articles", "clients", "facts", "skills", "timeline"].map(getJson),
  );

  console.log(`\nProjects (${apiProjects.length})`);
  const projects = [];
  for (const p of apiProjects) {
    console.log(`- ${p.name}`);
    projects.push(await syncProject(p));
  }

  console.log(`\nArticles (${apiArticles.length})`);
  const articles = [];
  for (const a of apiArticles) {
    console.log(`- ${a.title}`);
    articles.push(await syncArticle(a));
  }

  console.log(`\nClients (${apiClients.length})`);
  const clients = [];
  for (const c of apiClients) clients.push(await syncClient(c));

  const site = {
    facts: apiFacts.map((f) => ({ title: f.title, value: f.value })),
    skills: apiSkills.map((s) => ({ name: s.name, description: s.description ?? "", value: Number(s.value) || 0 })),
    timeline: [...apiTimeline]
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
      .map((t) => ({
        title: t.title,
        organization: t.organization ?? "",
        description: t.description ?? "",
        startDate: t.startDate ?? "",
        endDate: t.endDate ?? "",
      })),
    clients,
  };

  await mkdir(dataDir, { recursive: true });
  const written = [
    await writeJson("projects.json", projects),
    await writeJson("blog.json", articles),
    await writeJson("site.json", site),
  ];
  const removed = await pruneImages();

  console.log(
    `\nSynced ${projects.length} projects, ${articles.length} articles, ${clients.length} clients, ` +
      `${site.facts.length} facts, ${site.skills.length} skills, ${site.timeline.length} timeline entries\n` +
      `Wrote ${written.join(", ")}\n` +
      `Images: ${stats.downloaded} downloaded, ${stats.reused} unchanged, ` +
      `${stats.failed} skipped, ${removed} removed`,
  );
}

main().catch((err) => {
  console.error(`Sync failed: ${err.message}`);
  process.exit(1);
});
