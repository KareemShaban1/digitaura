import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["All", "Web", "Mobile", "Design", "Cloud"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Project Image */}
                <Link to={`/projects/${project.id}`} className="block">
                  <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60">
                      <span className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center gap-2">
                        View Details
                        <ExternalLink size={18} />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <span className="text-primary text-xs font-medium tracking-wider uppercase">
                    {project.category}
                  </span>
                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
