import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getBlogPostBySlug, getRelatedPosts, blogAuthor, formatPostDate } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <span
                  className="w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {blogAuthor.initials}
                </span>
                <div>
                  <p className="font-medium text-foreground">{blogAuthor.name}</p>
                  <p className="text-sm text-muted-foreground">{blogAuthor.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {formatPostDate(post.publishedAt, "long")}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr_200px] gap-12">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="project-content text-lg min-w-0"
              /* HTML authored in the portfolio CMS (copied by npm run sync:portfolio) */
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="sticky top-28 space-y-8">
                {/* Share */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Share2 size={14} />
                    Share
                  </h4>
                  <div className="flex gap-2">
                    <button className="p-2.5 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                      <Twitter size={16} />
                    </button>
                    <button className="p-2.5 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                      <Linkedin size={16} />
                    </button>
                    <button className="p-2.5 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                      <Facebook size={16} />
                    </button>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-card border border-border rounded-full text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Tags Mobile */}
      <section className="pb-12 lg:hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-sm font-semibold text-foreground mb-4">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-card border border-border rounded-full text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${relatedPost.slug}`} className="block group">
                      <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
