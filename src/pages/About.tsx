import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Target, Users, Zap, Award, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in our work.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients as true partners.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new technologies and creative solutions.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Honesty and transparency in all our dealings.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Creating solutions that make a real difference.",
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Founder", initial: "AC" },
  { name: "Sarah Johnson", role: "CTO", initial: "SJ" },
  { name: "Michael Park", role: "Lead Designer", initial: "MP" },
  { name: "Emily Davis", role: "Senior Developer", initial: "ED" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              We Are <span className="text-gradient">Digitaura</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A team of passionate technologists dedicated to building
              innovative digital solutions that transform businesses and delight
              users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Digitaura was founded with a simple mission: to bridge the gap
                  between innovative ideas and exceptional digital products.
                  What started as a small team of developers has grown into a
                  full-service technology company.
                </p>
                <p>
                  Over the years, we've had the privilege of working with
                  startups, enterprises, and everything in between. Each project
                  has taught us something new and helped shape our approach to
                  building software.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses
                  looking to leverage technology for growth, efficiency, and
                  competitive advantage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-bold text-primary/10">DA</div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gradient">8+</div>
                      <div className="text-sm text-muted-foreground">Years</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient">
                        150+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="text-4xl font-bold mt-4">
              What <span className="text-gradient">Drives</span> Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Team
            </span>
            <h2 className="text-4xl font-bold mt-4">
              Meet the <span className="text-gradient">Experts</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl font-bold text-primary">
                    {member.initial}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
