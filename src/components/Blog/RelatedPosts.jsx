import React from 'react';
import BlogCard from './BlogCard';
import { useBlogsList } from '../../hooks/useBlogsList';

const RelatedPosts = ({ currentPostSlug, category }) => {
  // Fetch blogs to find related ones
  const { data: blogs, loading } = useBlogsList(1);

  if (loading) return null;

  // Find up to 3 related posts in the same category, excluding the current post
  const relatedPosts = blogs
    .filter((post) => (post.blog_category || post.category) === category && post.slug !== currentPostSlug)
    .slice(0, 3);

  // If there aren't enough related posts in the same category, fill with other recent posts
  if (relatedPosts.length < 3) {
    const additionalPosts = blogs
      .filter(
        (post) =>
          post.slug !== currentPostSlug && !relatedPosts.some((rp) => rp.slug === post.slug)
      )
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50/80 mt-16 sm:mt-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Read More Like This
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;