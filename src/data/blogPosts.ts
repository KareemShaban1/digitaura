export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    slug: "future-of-web-development-2024",
    excerpt: "Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI integration to edge computing.",
    content: `
The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build and deploy web applications.

## AI-Powered Development

Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From code completion tools to automated testing, AI is helping developers work more efficiently than ever before.

## Edge Computing Revolution

The shift towards edge computing is transforming how we think about application architecture. By processing data closer to the user, we can achieve unprecedented performance levels and reduced latency.

## The Rise of Web Components

Web Components are finally hitting mainstream adoption, allowing developers to create reusable, encapsulated HTML elements that work across frameworks and platforms.

## Sustainability in Tech

Green coding practices are becoming increasingly important. Developers are now considering the environmental impact of their applications, optimizing for energy efficiency alongside performance.

## Conclusion

Staying ahead in web development means embracing these trends while maintaining a solid foundation in core technologies. The future is exciting, and those who adapt will thrive.
    `,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    category: "Technology",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      role: "Lead Developer"
    },
    publishedAt: "2024-03-15",
    readTime: "5 min read",
    tags: ["Web Development", "AI", "Trends"]
  },
  {
    id: "2",
    title: "Building Scalable Applications with Microservices",
    slug: "building-scalable-applications-microservices",
    excerpt: "Learn the best practices for designing and implementing microservices architecture that can scale with your business needs.",
    content: `
Microservices architecture has become the go-to approach for building large-scale applications. Let's explore how to implement it effectively.

## What Are Microservices?

Microservices break down applications into small, independent services that communicate through well-defined APIs. Each service can be developed, deployed, and scaled independently.

## Key Benefits

- **Scalability**: Scale individual services based on demand
- **Flexibility**: Use different technologies for different services
- **Resilience**: Failure in one service doesn't bring down the entire system
- **Faster Development**: Teams can work on different services simultaneously

## Best Practices

### 1. Design for Failure
Always assume that any service can fail. Implement circuit breakers, retries, and fallback mechanisms.

### 2. API Gateway
Use an API gateway to handle routing, authentication, and rate limiting.

### 3. Monitoring and Logging
Implement comprehensive monitoring and centralized logging to track issues across services.

## Conclusion

Microservices offer tremendous benefits but require careful planning and implementation. Start small and gradually evolve your architecture.
    `,
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    category: "Architecture",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      role: "Solutions Architect"
    },
    publishedAt: "2024-03-10",
    readTime: "7 min read",
    tags: ["Microservices", "Architecture", "Scalability"]
  },
  {
    id: "3",
    title: "UX Design Principles Every Developer Should Know",
    slug: "ux-design-principles-developers",
    excerpt: "Bridge the gap between design and development by understanding fundamental UX principles that create exceptional user experiences.",
    content: `
Great user experience isn't just the designer's responsibility—developers play a crucial role too. Here are essential UX principles every developer should understand.

## The Psychology of Design

### Hick's Law
The time to make a decision increases with the number of options. Keep interfaces simple and choices minimal.

### Fitts's Law
The time to reach a target depends on its distance and size. Make important buttons large and easily accessible.

## Core Principles

### 1. Consistency
Use consistent patterns throughout your application. Users shouldn't have to relearn interfaces.

### 2. Feedback
Always provide feedback for user actions. Loading states, success messages, and error notifications are essential.

### 3. Accessibility
Design for all users. Proper color contrast, keyboard navigation, and screen reader support are non-negotiable.

### 4. Performance
Speed is a feature. Optimize load times and interactions for the best user experience.

## Practical Tips

- Use skeleton loaders instead of spinners
- Implement optimistic UI updates
- Provide clear error messages with solutions
- Test with real users regularly

## Conclusion

Understanding UX principles makes you a better developer and collaborator. Always consider the user's perspective when building features.
    `,
    coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
    category: "Design",
    author: {
      name: "Michael Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      role: "UX Engineer"
    },
    publishedAt: "2024-03-05",
    readTime: "6 min read",
    tags: ["UX Design", "Development", "Best Practices"]
  },
  {
    id: "4",
    title: "Securing Your Web Applications: A Comprehensive Guide",
    slug: "securing-web-applications-guide",
    excerpt: "Discover essential security practices to protect your web applications from common vulnerabilities and cyber threats.",
    content: `
Security should never be an afterthought. Let's explore the essential practices for building secure web applications.

## Common Vulnerabilities

### SQL Injection
Never trust user input. Always use parameterized queries and prepared statements.

### Cross-Site Scripting (XSS)
Sanitize and escape all user-generated content before rendering it in the browser.

### Cross-Site Request Forgery (CSRF)
Implement CSRF tokens for all state-changing operations.

## Security Best Practices

### 1. Authentication
- Use strong password hashing (bcrypt, Argon2)
- Implement multi-factor authentication
- Use secure session management

### 2. Authorization
- Implement role-based access control
- Validate permissions on every request
- Use the principle of least privilege

### 3. Data Protection
- Encrypt sensitive data at rest and in transit
- Use HTTPS everywhere
- Implement proper key management

### 4. Monitoring
- Log security-relevant events
- Set up intrusion detection
- Have an incident response plan

## Conclusion

Security is an ongoing process. Stay updated on new vulnerabilities and continuously audit your applications.
    `,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    category: "Security",
    author: {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      role: "Security Engineer"
    },
    publishedAt: "2024-02-28",
    readTime: "8 min read",
    tags: ["Security", "Web Development", "Best Practices"]
  },
  {
    id: "5",
    title: "Digitaura Launches New Cloud Infrastructure Services",
    slug: "dev-arena-cloud-infrastructure-launch",
    excerpt: "We're excited to announce our new cloud infrastructure services, designed to help businesses scale efficiently and securely.",
    content: `
We're thrilled to announce a major expansion of our service offerings with the launch of Digitaura Cloud Infrastructure Services.

## What's New?

### Managed Cloud Solutions
Our team of certified cloud architects will help you design, deploy, and manage cloud infrastructure on AWS, Azure, or Google Cloud.

### DevOps as a Service
Accelerate your development pipeline with our comprehensive DevOps solutions, including CI/CD setup, container orchestration, and infrastructure as code.

### 24/7 Monitoring and Support
Our dedicated team provides round-the-clock monitoring and support to ensure your applications stay online and performant.

## Why This Matters

As businesses increasingly rely on cloud infrastructure, having the right partner is crucial. Our new services are designed to:

- Reduce infrastructure costs by up to 40%
- Improve deployment frequency
- Enhance security posture
- Provide peace of mind with expert support

## Getting Started

Contact our team today for a free consultation. We'll assess your current infrastructure and provide a customized roadmap for optimization.

## Conclusion

This launch represents our commitment to providing end-to-end technology solutions. We're excited to help more businesses leverage the power of the cloud.
    `,
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    category: "Company News",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      role: "CEO"
    },
    publishedAt: "2024-02-20",
    readTime: "4 min read",
    tags: ["Company News", "Cloud", "Services"]
  },
  {
    id: "6",
    title: "Mobile-First Development: Why It Matters More Than Ever",
    slug: "mobile-first-development-importance",
    excerpt: "Understanding the mobile-first approach and why it's essential for modern web development success.",
    content: `
With mobile devices accounting for over 60% of web traffic, mobile-first development is no longer optional—it's essential.

## What is Mobile-First?

Mobile-first means designing and developing for mobile devices before scaling up to larger screens. This approach forces you to prioritize content and features.

## Benefits of Mobile-First

### 1. Better Performance
Starting with mobile constraints leads to leaner, faster applications.

### 2. Improved User Experience
Mobile users get an optimized experience, not a cramped desktop version.

### 3. SEO Advantages
Google uses mobile-first indexing, meaning your mobile site affects your search rankings.

### 4. Future-Proof Design
Mobile-first designs naturally adapt to new devices and screen sizes.

## Implementation Strategies

### Progressive Enhancement
Start with a solid mobile foundation and add features for larger screens.

### Touch-First Interactions
Design for touch interactions first, then add mouse and keyboard support.

### Performance Budgets
Set strict performance budgets and optimize relentlessly.

## Conclusion

Mobile-first isn't just a design methodology—it's a mindset. Embrace it to build better, faster, and more accessible applications.
    `,
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    category: "Development",
    author: {
      name: "Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      role: "Mobile Lead"
    },
    publishedAt: "2024-02-15",
    readTime: "5 min read",
    tags: ["Mobile", "Development", "Responsive Design"]
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentId: string, category: string, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentId && post.category === category)
    .slice(0, limit);
};
