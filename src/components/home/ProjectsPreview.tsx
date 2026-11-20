import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online shopping experience with real-time inventory.",
    gradient: "from-primary/20 to-orange-500/20",
  },
  {
    title: "HealthTech Mobile App",
    category: "Mobile Development",
    description: "Cross-platform health tracking app with AI-powered insights.",
    gradient: "from-blue-500/20 to-primary/20",
  },
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    description: "Intuitive financial analytics dashboard for enterprise clients.",
    gradient: "from-green-500/20 to-primary/20",
  },
];

const ProjectsPreview = () => {
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
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-card/50 backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-foreground/10 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 bg-background">
                <span className="text-primary text-xs font-medium tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                  View Project <ExternalLink size={14} />
                </button>
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
