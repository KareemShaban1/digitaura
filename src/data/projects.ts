import projectsData from "./projects.json";

/**
 * Projects copied from the portfolio at kareem-shaban.com.
 * Don't edit projects.json by hand; refresh it with `npm run sync:projects`
 * (see scripts/sync-projects.mjs). Images live in public/projects/<id>/.
 */
export interface Project {
  id: string;
  title: string;
  category: string;
  categories: string[];
  description: string;
  /** HTML body written in the portfolio CMS. */
  content: string;
  tech: string[];
  year: string;
  /** Cover first, then gallery; empty when the project has no images. */
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export const projects: Project[] = projectsData;

export const projectCategories = Array.from(new Set(projects.flatMap((p) => p.categories)));

export const getProjectById = (id: string): Project | undefined => projects.find((p) => p.id === id);

export const getRelatedProjects = (project: Project, limit = 3): Project[] =>
  projects
    .filter((p) => p.id !== project.id && p.categories.some((c) => project.categories.includes(c)))
    .slice(0, limit);
