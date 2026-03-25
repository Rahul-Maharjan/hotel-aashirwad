import React, { useState } from 'react';
import CommonHeader from '../components/CommonHeader';
import BlogCard from '../components/Blog/BlogCard';
import { useBlogHero } from '../hooks/useBlogHero';
import { useBlogsList } from '../hooks/useBlogsList';

const BlogListing = () => {
    const [page, setPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState('All');

    const { data: heroData, loading: heroLoading } = useBlogHero();
    const { data: blogs, meta, loading: blogsLoading } = useBlogsList(page);

    // Since filtering is usually handled by API in real scenarios, 
    // but for now, we'll filter the current page's results if a category is selected.
    // In a full implementation, categories would be a separate API or a query param.
    const filteredPosts = activeCategory === 'All'
        ? blogs
        : blogs.filter((post) => (post.blog_category || post.category) === activeCategory);

    // Get unique categories from currently loaded blogs (or hardcode/fetch if needed)
    const categories = ['All', ...new Set(blogs.map(post => post.blog_category || post.category).filter(Boolean))];

    if (heroLoading && page === 1) return null;

    return (
        <div className="min-h-screen bg-gray-50/50">
            <CommonHeader
                title={heroData?.headline || "Our Blog & Stories"}
                description={heroData?.description || "Discover our latest insights, travel guides, and stories from around the world. Stay inspired for your next journey."}
                image={heroData?.featured_image}
                showAccent={true}
                heightClassName="h-[45vh]"
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${activeCategory === category
                                    ? 'bg-gray-900 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {filteredPosts.length === 0 && !blogsLoading && (
                    <div className="text-center py-20 bg-white border border-gray-100 mt-8">
                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                            No posts found
                        </h3>
                        <p className="text-gray-500">
                            Try selecting a different category.
                        </p>
                    </div>
                )}

                {/* Pagination / Load More */}
                {meta && meta.current_page < meta.last_page && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setPage(prev => prev + 1)}
                            disabled={blogsLoading}
                            className="px-8 py-3.5 bg-white border border-gray-200 text-gray-900 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50"
                        >
                            {blogsLoading ? "Loading..." : "Load More Articles"}
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default BlogListing;