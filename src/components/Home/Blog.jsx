import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { useBlogSection } from "../../hooks/useBlogSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

const Blog = () => {
  const { data: blogSectionData, loading: blogSectionLoading } = useBlogSection();

  if (blogSectionLoading) return null;

  const blogs = blogSectionData?.items || [];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-[#e5e5e5]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        
        {/* HEADER */}
        <div className="mb-12 text-center sm:mb-16">
          <Motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl uppercase tracking-[0.14em] text-[#0f1f47] sm:text-4xl"
          >
            {blogSectionData?.section_title || "Our Journal"}
          </Motion.h2>

          <Motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-[#4f4f4f] leading-relaxed"
          >
            {blogSectionData?.description || "Discover travel stories, local experiences and useful tips to make your stay in Pokhara unforgettable."}
          </Motion.p>

          <Motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f1f47] pb-1 border-b border-[#0f1f47] hover:text-[#9b7b45] hover:border-[#9b7b45] transition-colors">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </Motion.div>
        </div>

        {/* BLOG GRID */}
        <Motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          {blogs.map((blog, index) => {
            const imageUrl = blog.featured_image?.startsWith('http') 
              ? blog.featured_image 
              : `https://hotel-aashirwad-cms-main-z0uqd8.free.laravel.cloud/storage/${blog.featured_image}`;

            return (
              <Motion.div
                key={blog.id || index}
                variants={itemVariants}
                className="group flex flex-col items-center bg-[#f7f5f1] border border-transparent hover:border-[#e5e5e5] transition-colors duration-300 pb-8"
              >
                <div className="w-full h-[340px] overflow-hidden mb-6 relative bg-gray-200">
                  <img
                    src={imageUrl}
                    alt={blog.blog_title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="px-6 flex flex-col items-center text-center flex-grow">
                  {/* Meta details using proper icons */}
                  <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs tracking-wider uppercase text-[#6a6a6a] font-semibold mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#9b7b45]" />
                      <span>
                        {isNaN(Date.parse(blog.created_at)) 
                          ? blog.created_at 
                          : new Date(blog.created_at).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#9b7b45]" />
                      <span>{blog.read_time} Min</span>
                    </div>
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9b7b45] mb-3">
                    {blog.category}
                  </p>

                  <h3 className="font-serif text-xl tracking-wide text-[#0f1f47] group-hover:text-[#9b7b45] transition-colors mb-4 line-clamp-2">
                    {blog.blog_title}
                  </h3>

                  <p className="text-sm text-[#4f4f4f] leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <Link to={`/blog/${blog.slug || blog.id}`} className="mt-auto items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0f1f47] pb-1 border-b border-[#0f1f47] hover:text-[#9b7b45] hover:border-[#9b7b45] transition-colors inline-flex">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Motion.div>
            );
          })}
        </Motion.div>
        
      </div>
    </section>
  );
};

export default Blog;
