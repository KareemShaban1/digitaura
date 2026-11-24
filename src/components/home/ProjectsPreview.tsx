import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useProjects } from "@/lib/portfolio";
import ProjectCover from "@/components/projects/ProjectCover";


const ProjectsPreview = () => {
  const { data } = useProjects();
  const projects = (data ?? []).slice(0, 3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const decorationRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements with Parallax */}
      <motion.div
        style={{ rotate: decorationRotate, y: backgroundY }}
        className="absolute top-1/2 -right-32 w-64 h-64 border border-primary/5 rounded-full"
      />

      <motion.div style={{ y: backgroundY }} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent work that showcases our expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              <Link to={`/projects/${project.id}`} className="block aspect-[4/3] relative overflow-hidden">
                <ProjectCover
                  project={project}
                  className="opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </Link>

              {/* Content */}
              <div className="p-6 bg-background">
                <span className="text-primary text-xs font-medium tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  View Project <ExternalLink size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsPreview;
