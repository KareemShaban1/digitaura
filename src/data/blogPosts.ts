import blogData from "./blog.json";

/**
 * Articles copied from the portfolio at kareem-shaban.com.
 * Don't edit blog.json by hand; refresh it with `npm run sync:portfolio`.
 * Images live in public/blog/<slug>/.
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  /** HTML body written in the portfolio CMS. */
  content: string;
  coverImage: string;
  category: string;
  /** ISO date, e.g. "2026-10-14". */
  publishedAt: string;
  readTime: string;
  tags: string[];
}

/** The portfolio API has no author per article; they're all written by Kareem. */
export const blogAuthor = {
  name: "Kareem Shaban",
  role: "Full Stack Developer",
  initials: "KS",
};

export const blogPosts: BlogPost[] = blogData;

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (currentId: string, category: string, limit: number = 3): BlogPost[] =>
  blogPosts.filter((post) => post.id !== currentId && post.category === category).slice(0, limit);

/** Formats an ISO date without the UTC-midnight off-by-one of `new Date("YYYY-MM-DD")`. */
export const formatPostDate = (iso: string, month: "short" | "long" = "short") => {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { month, day: "numeric", year: "numeric" });
};
