import { useQuery } from "@tanstack/react-query";

/** Public projects API of the portfolio at kareem-shaban.com (CORS: *). */
export const PORTFOLIO_API = "https://kareem-shaban.com/api";

interface ApiProject {
  id: number;
  slug: string;
  name: string;
  description: string | null;
  year: string | null;
  coverImage: string | null;
  gallery: string[] | null;
  categories: string[] | null;
  tags: string[] | null;
  repoUrl: string | null;
  siteUrl: string | null;
  content: string | null;
  sortOrder: number | null;
}

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

const gradients: Record<string, string> = {
  "Full Stack": "from-primary/30 to-orange-500/30",
  Backend: "from-green-500/30 to-primary/30",
  Frontend: "from-purple-500/30 to-primary/30",
  Mobile: "from-blue-500/30 to-primary/30",
};

const toProject = (p: ApiProject): Project => {
  const categories = p.categories?.length ? p.categories : ["Other"];
  const images = [p.coverImage, ...(p.gallery ?? [])].filter(
    (src, i, all): src is string => !!src && all.indexOf(src) === i,
  );
  return {
    id: p.slug,
    title: p.name,
    category: categories[0],
    categories,
    description: p.description ?? "",
    content: p.content ?? "",
    tech: p.tags ?? [],
    year: p.year ?? "",
    images,
    liveUrl: p.siteUrl || undefined,
    githubUrl: p.repoUrl || undefined,
    gradient: gradients[categories[0]] ?? "from-primary/30 to-orange-500/30",
  };
};

const fetchProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${PORTFOLIO_API}/projects`);
  if (!res.ok) throw new Error(`Failed to load projects (${res.status})`);
  const data: ApiProject[] = await res.json();
  // The API already returns projects in the portfolio's display order.
  return data.map(toProject);
};

export const useProjects = () =>
  useQuery({
    queryKey: ["portfolio-projects"],
    queryFn: fetchProjects,
    staleTime: 10 * 60 * 1000,
  });

export const useProject = (id: string) => {
  const query = useProjects();
  const projects = query.data ?? [];
  const project = projects.find((p) => p.id === id);
  const related = project
    ? projects
        .filter((p) => p.id !== project.id && p.categories.some((c) => project.categories.includes(c)))
        .slice(0, 3)
    : [];
  return { ...query, project, related };
};
