import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Smartphone, Cloud, Palette, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for performance and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions to power your applications with reliability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront of every decision.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const decorationY1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const decorationY2 = useTransform(scrollYProgress, [0, 1], [30, -70]);

  return (
    <section ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Geometric Accent with Parallax */}
      <motion.div 
        style={{ y: decorationY1 }}
        className="absolute -top-24 -right-24 w-48 h-48 border border-primary/10 rotate-45" 
      />
      <motion.div 
        style={{ y: decorationY2 }}
        className="absolute -bottom-24 -left-24 w-48 h-48 border border-primary/10 rotate-45" 
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
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-gradient-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
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
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Explore All Services
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
