import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ImageSlider from "@/components/projects/ImageSlider";
import ProjectCover from "@/components/projects/ProjectCover";
import { getProjectById, getRelatedProjects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, ArrowRight } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  const related = project ? getRelatedProjects(project) : [];

  if (!project) {
    return (
      <Layout>
        <section className="py-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.images.length > 0 ? (
                <ImageSlider images={project.images} title={project.title} />
              ) : (
                <div className="aspect-video rounded-2xl overflow-hidden border border-border">
                  <ProjectCover project={project} />
                </div>
              )}
            </motion.div>

            {/* Right - Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((c) => (
                  <span key={c} className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {c}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-card rounded-xl border border-border">
                  <Layers size={20} className="text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="font-semibold text-sm">{project.categories.join(", ")}</p>
                </div>
                {project.year && (
                  <div className="p-4 bg-card rounded-xl border border-border">
                    <Calendar size={20} className="text-primary mb-2" />
                    <p className="text-xs text-muted-foreground">Year</p>
                    <p className="font-semibold text-sm">{project.year}</p>
                  </div>
                )}
              </div>

              {project.tech.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:glow-primary transition-all"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-muted transition-all"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview (HTML authored in the portfolio CMS) */}
      {project.content && (
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-content max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </div>
        </section>
      )}

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Related <span className="text-gradient">Projects</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/projects/${relatedProject.id}`}
                    className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <ProjectCover
                        project={relatedProject}
                        className="opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-xs font-medium tracking-wider uppercase">
                        {relatedProject.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProjectDetails;
