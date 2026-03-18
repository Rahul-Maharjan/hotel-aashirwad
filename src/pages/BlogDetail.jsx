import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Tags,
} from 'lucide-react';
import CommonHeader from '../components/CommonHeader';
import { blogData } from '../data/blogData';
import RelatedPosts from '../components/Blog/RelatedPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData.find((p) => p.id === parseInt(id));

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Article Not Found
        </h2>
        <p className="text-gray-500 mb-8 max-w-md text-center">
          The article you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      <CommonHeader
        title={post.title}
        image={post.image}
        imageAlt={post.title}
        heightClassName="h-[50vh]"
        minHeightClassName="min-h-[400px]"
        showAccent={true}
        description=""
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Navigation & Category */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-gray-100 pb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-800 text-sm font-semibold border border-gray-200">
            {post.category}
          </span>
        </div>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm text-gray-600 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 object-cover border border-gray-200"
            />
            <div>
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>

          <div className="flex items-center gap-6 ml-auto sm:ml-0 border-l border-gray-200 pl-6 h-10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        {/* Using standard classes to simulate prose typography without rounding corners */}
        <div
          className="prose prose-lg prose-gray max-w-none 
                    prose-headings:font-bold prose-headings:text-gray-900 prose-heading:mb-6 
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 
                    prose-img:w-full prose-img:my-10 prose-img:shadow-sm prose-img:border prose-img:border-gray-100
                    prose-blockquote:border-l-4 prose-blockquote:border-gray-900 prose-blockquote:pl-6 
                    prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:my-10 
                    prose-blockquote:bg-gray-50 prose-blockquote:py-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Keywords / Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-gray-500 mr-2">
              <Tags className="w-4 h-4" />
              <span className="text-sm font-medium">Keywords:</span>
            </div>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-600 text-sm border border-gray-200 hover:bg-gray-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Share Section */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Share2 className="w-5 h-5" />
              <span>Share this article</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all transform hover:-translate-y-1 focus:outline-none">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Share on Twitter</span>
              </button>
              <button className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-[#4267B2] hover:text-white hover:border-[#4267B2] transition-all transform hover:-translate-y-1 focus:outline-none">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Share on Facebook</span>
              </button>
              <button className="w-10 h-10 border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all transform hover:-translate-y-1 focus:outline-none">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">Share on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentPostId={post.id} category={post.category} />
    </article>
  );
};

export default BlogDetail;