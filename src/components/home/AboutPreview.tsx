import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Users, Zap, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Target,
    title: "Mission Driven",
    description:
      "We focus on delivering solutions that make a real impact on your business.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Skilled developers, designers, and strategists working together.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile methodology ensures quick turnarounds without compromising quality.",
  },
];

const AboutPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const leftContentX = useTransform(scrollYProgress, [0, 0.5], [-20, 0]);
  const rightContentX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Grid with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-[0.02]"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            style={{ x: leftContentX }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Building the <span className="text-gradient">Future</span> of
              Digital
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Digitaura is a forward-thinking technology company dedicated to
              creating innovative digital solutions. We combine technical
              expertise with creative thinking to build products that not only
              meet requirements but exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With years of experience across diverse industries, our team
              understands what it takes to deliver successful projects on time
              and within budget.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-muted transition-all"
            >
              Learn More About Us
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            style={{ x: rightContentX }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex gap-5 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
