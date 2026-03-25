import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
    // Map CMS fields to local variables with fallbacks
    const title = post.Title || post.title;
    const category = post.blog_category || post.category;
    const image = post.featured_photo || post.image;
    const dateStr = post.created_at || post.date;
    const readTime = post.read_time ? `${post.read_time} Min` : post.readTime;
    const excerpt = post.excerpt;
    const slug = post.slug || post.id;
    const authorName = post.created_by_name || (post.author?.name) || "Hotel Aashirwad";
    const keywords = post.keywords || post.tags || [];

    return (
        <article className="group flex flex-col bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Category Badge - Sharp corners */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-medium shadow-sm text-gray-800">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 sm:p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span>{authorName}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>
                            {isNaN(Date.parse(dateStr)) ? dateStr : new Date(dateStr).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{readTime}</span>
                    </div>
                </div>

                {/* Title */}
                <Link to={`/blog/${slug}`} className="block focus:outline-none">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {excerpt}
                </p>

                {/* Keywords */}
                {keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {keywords.slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-gray-50 text-gray-500 border border-gray-100">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                        to={`/blog/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors focus:outline-none"
                    >
                        Read Article
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;