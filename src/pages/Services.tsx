import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Code, Smartphone, Cloud, Palette, Database, Shield, Cpu, LineChart, ArrowRight, MessageSquare, PenTool, Rocket, Headphones } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const processSteps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description: "We start by understanding your vision, goals, and requirements through in-depth discussions and research.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Design & Planning",
    description: "Our team creates detailed wireframes, prototypes, and project roadmaps tailored to your needs.",
  },
  {
    step: "03",
    icon: Code,
    title: "Development & Testing",
    description: "We build your solution using agile methodology with regular testing and quality assurance.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Deployment",
    description: "Your project goes live with thorough testing, optimization, and seamless deployment.",
  },
  {
    step: "05",
    icon: Headphones,
    title: "Support & Growth",
    description: "We provide ongoing maintenance, updates, and support to ensure continued success.",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a full-scale web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular sprints and client check-ins. This includes discovery, design, development, testing, and deployment phases, ensuring transparency and flexibility throughout the project.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We offer various support packages including bug fixes, security updates, feature enhancements, and 24/7 monitoring. Our team is always available to ensure your application runs smoothly.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Google Cloud. We choose the best tech stack based on your specific project requirements.",
  },
  {
    question: "How do you handle project communication?",
    answer: "We use tools like Slack, Jira, and regular video calls to keep you updated. You'll have a dedicated project manager and access to our project dashboard for real-time progress tracking.",
  },
  {
    question: "What are your payment terms?",
    answer: "We typically work with a 30% upfront deposit, 40% at the midpoint, and 30% upon completion. For ongoing projects, we offer monthly retainer options. We accept various payment methods for your convenience.",
  },
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Vue. We create fast, scalable, and SEO-optimized websites.",
    features: ["Custom Web Apps", "E-commerce Solutions", "CMS Development", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android. From concept to app store deployment.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure on AWS, Google Cloud, and Azure. DevOps, CI/CD, and serverless architecture.",
    features: ["Cloud Migration", "DevOps Setup", "Serverless Functions", "Auto-scaling"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that enhance engagement. From wireframes to polished interfaces.",
    features: ["User Research", "Wireframing", "Visual Design", "Prototyping"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js, Python, and Go. RESTful APIs and microservices architecture.",
    features: ["API Development", "Database Design", "Microservices", "Real-time Systems"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security audits, penetration testing, and security implementations.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Data Protection"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Leverage the power of AI with custom machine learning models, chatbots, and intelligent automation.",
    features: ["ML Models", "Chatbots", "Data Analysis", "Automation"],
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description: "Strategic consulting to help you make the right technology decisions for your business growth.",
    features: ["Tech Consulting", "Digital Transformation", "Process Optimization", "Growth Strategy"],
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Solutions That <span className="text-gradient">Drive Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital services to help your business thrive in the modern world. From development to strategy, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              How We <span className="text-gradient">Deliver Results</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that ensures quality, transparency, and success at every stage.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block" />
            
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                    <step.icon size={28} className="text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    {step.step}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`flex-1 p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers. Find out more about how we work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Need a <span className="text-gradient">Custom Solution</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your unique requirements and create a tailored approach for your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              Get a Free Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
