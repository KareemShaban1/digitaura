import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const circleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Gradient with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" 
      />
      
      {/* Animated Circles with Parallax */}
      <motion.div
        style={{ scale: circleScale }}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
      />
      <motion.div
        style={{ scale: circleScale }}
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/15 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Ready to Start?</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient glow-text">Amazing Together</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can help bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center gap-2 hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-muted transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
