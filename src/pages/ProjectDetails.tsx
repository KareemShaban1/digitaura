import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ImageSlider from "@/components/projects/ImageSlider";
import { getProjectById, getRelatedProjects } from "@/data/projects";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2, 
  Lightbulb, 
  Target,
  Quote,
  ArrowRight
} from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  const relatedProjects = project ? getRelatedProjects(project.id, project.category) : [];

  if (!project) {
    return (
      <Layout>
        <section className="py-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
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
          {/* Back Button */}
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
            {/* Left - Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ImageSlider images={project.images} title={project.title} />
            </motion.div>

            {/* Right - Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-card rounded-xl border border-border">
                  <User size={20} className="text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Client</p>
                  <p className="font-semibold text-sm">{project.client}</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <Clock size={20} className="text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold text-sm">{project.duration}</p>
                </div>
                <div className="p-4 bg-card rounded-xl border border-border">
                  <Calendar size={20} className="text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Year</p>
                  <p className="font-semibold text-sm">{project.year}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
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

      {/* Challenges, Solutions, Results */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-background rounded-2xl border border-border"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target size={24} className="text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-background rounded-2xl border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Solutions</h3>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-background rounded-2xl border border-border"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <Quote size={48} className="text-primary/30 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "{project.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-lg">{project.testimonial.author}</p>
                <p className="text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-card">
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
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/projects/${relatedProject.id}`}
                    className="group block rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className={`aspect-video bg-gradient-to-br ${relatedProject.gradient} relative`}>
                      <img
                        src={relatedProject.images[0]}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProjectDetails;
