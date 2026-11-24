import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { blogPosts, blogCategories, blogAuthor, formatPostDate } from "@/data/blogPosts";
import { Input } from "@/components/ui/input";

const categories = ["All", ...blogCategories];

const AuthorAvatar = ({ size }: { size: string }) => (
  <span
    className={`${size} rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-xs flex-shrink-0`}
    aria-hidden="true"
  >
    {blogAuthor.initials}
  </span>
);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const query = searchQuery.toLowerCase();
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Blog & News
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay up to date with the latest trends, tutorials, and company news from our team of experts.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 bg-card border-border"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to={`/blog/${featuredPost.slug}`} className="block group">
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 md:h-full min-h-[300px]">
                      <img
                        src={featuredPost.coverImage}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="text-primary text-sm font-medium mb-3">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mb-6">
                        <AuthorAvatar size="w-10 h-10" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {blogAuthor.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {blogAuthor.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatPostDate(featuredPost.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(selectedCategory === "All" && searchQuery === "" ? 1 : 0).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block group h-full">
                  <div className="bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <AuthorAvatar size="w-8 h-8" />
                          <span className="text-xs text-muted-foreground">
                            {formatPostDate(post.publishedAt)}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get the latest articles, tutorials, and company updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-background border-border"
              />
              <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:glow-primary transition-all duration-300 flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
