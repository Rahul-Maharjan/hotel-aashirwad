import React from "react";
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
    transition: {
      duration: 0.7,
      ease: [0.21, 0.45, 0.32, 0.9],
    },
  },
};

const Blog = () => {
    const { data: blogSectionData, loading: blogSectionLoading } = useBlogSection();

    if (blogSectionLoading) return null;

    const blogs = blogSectionData?.items || [];

    return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f9f8f6] -z-0 hidden lg:block" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
          <Motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl uppercase tracking-[0.14em] text-[#0f1f47] sm:text-4xl"
          >
            {blogSectionData?.section_title || "Our Journal"}
          </Motion.h2>

          <Motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-[#4f4f4f] leading-relaxed"
          >
            {blogSectionData?.description || "Discover travel stories, local experiences and useful tips to make your stay in Pokhara unforgettable."}
          </Motion.p>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border-b-2 border-[#9b7b45] pb-1 text-sm font-medium uppercase tracking-widest text-[#0f1f47] transition-all hover:border-[#0f1f47] hover:text-[#9b7b45]"
            >
              View All Stories <ArrowRight className="h-4 w-4" />
            </Link>
          </Motion.div>
        </div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogs.map((post) => {
              const imageUrl = post.featured_image?.startsWith('http') 
                  ? post.featured_image 
                  : `https://hotel-aashirwad-cms-main-z0uqd8.free.laravel.cloud/storage/${post.featured_image}`;
              
              return (
                <Motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="group flex flex-col bg-white border border-[#e5e5e5] shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#9b7b45]/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={post.blog_title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0f1f47] border border-[#d8d1c2]">
                      {post.category}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 lg:p-8">
                    <div className="mb-4 flex items-center gap-4 text-[11px] font-medium uppercase tracking-wider text-[#9b7b45]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" /> {new Date(post.created_at).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {post.read_time} Min
                      </span>
                    </div>

                    <h3 className="mb-4 font-serif text-xl uppercase tracking-wider text-[#0f1f47] transition-colors duration-300 group-hover:text-[#9b7b45] lg:text-2xl leading-tight">
                      <Link to={`/blog/${post.slug}`}>
                        {post.blog_title}
                      </Link>
                    </h3>

                    <p className="mb-8 line-clamp-2 text-sm leading-relaxed text-[#4f4f4f]">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-[#f0f0f0]">
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#0f1f47]">
                        <div className="w-6 h-6 rounded-full bg-[#f9f8f6] flex items-center justify-center border border-[#e5e5e5]">
                           <User className="w-3 h-3 text-[#9b7b45]" />
                        </div>
                        By Hotel Aashirwad
                      </div>
                      
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-xs font-bold uppercase tracking-[0.15em] text-[#9b7b45] group-hover:text-[#0f1f47] transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </Motion.article>
              );
          })}
        </Motion.div>
      </div>
    </section>
  );
};

export default Blog;
