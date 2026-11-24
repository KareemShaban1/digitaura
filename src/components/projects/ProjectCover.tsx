import type { Project } from "@/data/projects";

interface ProjectCoverProps {
  project: Project;
  className?: string;
}

/** Project cover image, or a gradient with the project's initials when it has none. */
const ProjectCover = ({ project, className = "" }: ProjectCoverProps) => {
  if (project.images[0]) {
    return (
      <img
        src={project.images[0]}
        alt={project.title}
        loading="lazy"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient}`}>
      <span className="text-5xl font-bold text-foreground/40 tracking-wider">{initials}</span>
    </div>
  );
};

export default ProjectCover;
