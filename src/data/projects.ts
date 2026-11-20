export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  gradient: string;
  images: string[];
  client: string;
  duration: string;
  year: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web",
    description: "A comprehensive e-commerce solution with real-time inventory, payment processing, and advanced analytics.",
    fullDescription: "We built a fully-featured e-commerce platform that handles thousands of transactions daily. The system includes real-time inventory management, multiple payment gateway integrations, and a powerful analytics dashboard that provides insights into customer behavior and sales trends.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    gradient: "from-primary/30 to-orange-500/30",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
    ],
    client: "RetailMax Inc.",
    duration: "6 months",
    year: "2024",
    challenges: [
      "Handling high traffic during flash sales",
      "Integrating multiple payment gateways",
      "Real-time inventory synchronization across warehouses"
    ],
    solutions: [
      "Implemented auto-scaling infrastructure on AWS",
      "Built a unified payment abstraction layer",
      "Developed event-driven inventory system with Redis"
    ],
    results: [
      "300% increase in conversion rate",
      "99.9% uptime during peak sales",
      "50% reduction in checkout abandonment"
    ],
    testimonial: {
      quote: "Digitaura transformed our online presence. The new platform handles our busiest sales days effortlessly.",
      author: "Sarah Johnson",
      role: "CTO, RetailMax Inc."
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "healthtech-mobile-app",
    title: "HealthTech Mobile App",
    category: "Mobile",
    description: "Cross-platform health tracking application with AI-powered insights and doctor consultation features.",
    fullDescription: "A comprehensive health and wellness application that allows users to track their vitals, connect with healthcare providers, and receive AI-powered health recommendations. The app integrates with wearable devices and provides personalized health insights based on user data.",
    tech: ["React Native", "Firebase", "TensorFlow", "Python", "Node.js", "MongoDB"],
    gradient: "from-blue-500/30 to-primary/30",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200"
    ],
    client: "MedLife Solutions",
    duration: "8 months",
    year: "2024",
    challenges: [
      "Ensuring HIPAA compliance for health data",
      "Building accurate AI health predictions",
      "Seamless wearable device integration"
    ],
    solutions: [
      "Implemented end-to-end encryption and secure data storage",
      "Trained custom ML models on anonymized health datasets",
      "Built universal SDK for major wearable platforms"
    ],
    results: [
      "500K+ active users in first year",
      "4.8 star rating on app stores",
      "85% user retention rate"
    ],
    testimonial: {
      quote: "The app has revolutionized how our patients manage their health. The AI insights are remarkably accurate.",
      author: "Dr. Michael Chen",
      role: "Medical Director, MedLife"
    },
    liveUrl: "https://example.com"
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    category: "Design",
    description: "Enterprise financial analytics dashboard with real-time data visualization and reporting.",
    fullDescription: "We designed and developed a sophisticated financial analytics platform that provides real-time insights into market trends, portfolio performance, and risk assessment. The dashboard features interactive charts, customizable widgets, and automated report generation.",
    tech: ["Figma", "React", "D3.js", "TypeScript", "GraphQL", "PostgreSQL"],
    gradient: "from-green-500/30 to-primary/30",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200"
    ],
    client: "CapitalFlow Partners",
    duration: "5 months",
    year: "2023",
    challenges: [
      "Processing and visualizing massive datasets in real-time",
      "Creating intuitive UX for complex financial data",
      "Ensuring sub-second query response times"
    ],
    solutions: [
      "Implemented data streaming with WebSocket connections",
      "Conducted extensive user research and iterative design",
      "Built optimized GraphQL resolvers with caching"
    ],
    results: [
      "40% faster decision-making for traders",
      "60% reduction in report generation time",
      "Adopted by 15 enterprise clients"
    ],
    testimonial: {
      quote: "The dashboard has become indispensable for our trading team. The real-time insights give us a competitive edge.",
      author: "James Wilson",
      role: "Head of Trading, CapitalFlow"
    },
    liveUrl: "https://example.com"
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration Project",
    category: "Cloud",
    description: "Complete infrastructure migration from on-premise to AWS with zero downtime.",
    fullDescription: "Led a comprehensive cloud migration initiative, moving critical enterprise systems from legacy on-premise infrastructure to AWS. The project included database migration, application modernization, and implementing a robust DevOps pipeline for continuous deployment.",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Ansible"],
    gradient: "from-purple-500/30 to-primary/30",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200",
      "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=1200"
    ],
    client: "GlobalTech Industries",
    duration: "12 months",
    year: "2023",
    challenges: [
      "Migrating 50+ legacy applications without downtime",
      "Training teams on cloud-native technologies",
      "Maintaining security and compliance standards"
    ],
    solutions: [
      "Developed blue-green deployment strategy",
      "Created comprehensive training and documentation",
      "Implemented AWS security best practices and automation"
    ],
    results: [
      "Zero downtime during migration",
      "45% reduction in infrastructure costs",
      "10x improvement in deployment frequency"
    ],
    testimonial: {
      quote: "Digitaura made our cloud journey smooth and stress-free. Their expertise in DevOps is unmatched.",
      author: "Robert Martinez",
      role: "VP of Engineering, GlobalTech"
    }
  },
  {
    id: "social-media-platform",
    title: "Social Media Platform",
    category: "Web",
    description: "A next-gen social platform with real-time messaging, content moderation, and creator tools.",
    fullDescription: "Built a modern social media platform from the ground up, featuring real-time messaging, advanced content moderation using AI, and comprehensive tools for content creators including monetization features, analytics, and scheduling capabilities.",
    tech: ["Next.js", "GraphQL", "Redis", "WebSocket", "PostgreSQL", "AWS"],
    gradient: "from-pink-500/30 to-primary/30",
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200",
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1200",
      "https://images.unsplash.com/photo-1522542550221-31fd8575f4a7?w=1200"
    ],
    client: "ConnectHub Inc.",
    duration: "10 months",
    year: "2024",
    challenges: [
      "Scaling real-time features for millions of concurrent users",
      "Building effective AI content moderation",
      "Creating fair creator monetization system"
    ],
    solutions: [
      "Implemented distributed WebSocket infrastructure",
      "Trained custom ML models for content classification",
      "Developed transparent revenue-sharing algorithms"
    ],
    results: [
      "2M+ monthly active users",
      "95% harmful content detection accuracy",
      "$10M+ paid out to creators"
    ],
    testimonial: {
      quote: "They built exactly what we envisioned and more. The platform scales beautifully and creators love it.",
      author: "Emily Zhang",
      role: "CEO, ConnectHub"
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "logistics-management",
    title: "Logistics Management App",
    category: "Mobile",
    description: "Fleet tracking and delivery management system with route optimization.",
    fullDescription: "Developed a comprehensive logistics management solution that enables real-time fleet tracking, automated route optimization, and seamless communication between drivers and dispatchers. The system significantly improved delivery efficiency and reduced operational costs.",
    tech: ["Flutter", "Google Maps", "MongoDB", "Node.js", "Firebase", "Python"],
    gradient: "from-yellow-500/30 to-primary/30",
    images: [
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200",
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200"
    ],
    client: "SwiftDelivery Co.",
    duration: "7 months",
    year: "2023",
    challenges: [
      "Accurate real-time GPS tracking with battery optimization",
      "Complex route optimization for 1000+ daily deliveries",
      "Offline functionality for areas with poor connectivity"
    ],
    solutions: [
      "Implemented smart location batching and caching",
      "Built ML-powered route optimization engine",
      "Developed robust offline-first architecture"
    ],
    results: [
      "30% reduction in fuel costs",
      "25% more deliveries per driver per day",
      "98% on-time delivery rate"
    ],
    testimonial: {
      quote: "This app transformed our operations. Drivers love it, and our efficiency has never been better.",
      author: "Marcus Thompson",
      role: "Operations Director, SwiftDelivery"
    },
    liveUrl: "https://example.com"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getRelatedProjects = (currentId: string, category: string, limit = 3): Project[] => {
  return projects
    .filter(project => project.id !== currentId && project.category === category)
    .slice(0, limit);
};
