import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { useHeroParallax } from "@/hooks/useParallax";
import { facts } from "@/data/site";

const HeroSection = () => {
  const { backgroundY, contentY, opacity, scale } = useHeroParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-dark" 
      />
      
      {/* Geometric Decorations with Parallax */}
      <motion.div
        style={{ y: useTransform(backgroundY, v => v * 0.5) }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-64 h-64 border border-primary/10 rounded-full"
      />
      <motion.div
        style={{ y: useTransform(backgroundY, v => v * 0.7) }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-48 h-48 border border-primary/20 rotate-45"
      />
      <motion.div
        style={{ y: useTransform(backgroundY, v => v * 0.3) }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary/30 rounded-full blur-sm"
      />
      <motion.div
        style={{ y: useTransform(backgroundY, v => v * 0.8) }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-primary/20 rounded-full blur-sm"
      />
      
      {/* Floating particles with parallax */}
      <motion.div
        style={{ y: useTransform(backgroundY, v => v * 1.2) }}
        className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary/40 rounded-full"
      />
      <motion.div
        style={{ y: useTransform(backgroundY, v => v * 0.4) }}
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/25 rounded-full blur-[2px]"
      />

      {/* Grid Pattern with subtle parallax */}
      <motion.div 
        style={{ y: useTransform(backgroundY, v => v * 0.2) }}
        className="absolute inset-0 opacity-[0.02]"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.div 
        style={{ y: contentY, opacity, scale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-primary font-medium">Innovative Tech Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            We Build{" "}
            <span className="text-gradient glow-text">Digital</span>
            <br />
            Experiences
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transforming ideas into powerful software solutions. From web applications to mobile apps, we bring your vision to life with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center gap-2 hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold flex items-center gap-2 hover:bg-muted transition-all duration-300"
            >
              <Code2 size={18} />
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {facts.map((stat) => (
              <div key={stat.title} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
