import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useExperienceDetail } from '../hooks/useExperienceDetail';
import { useExperiencesList } from '../hooks/useExperiencesList';
import CommonHeader from '../components/CommonHeader';
import {
    ArrowLeft, ArrowRight, Maximize, X, ChevronLeft, ChevronRight,
    Clock, Calendar, Users, CheckCircle2, Navigation
} from 'lucide-react';
import SEO from '../components/SEO/SEO';

const ExperienceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { data: experience, loading, error } = useExperienceDetail(slug);
    const { data: allExperiences, loading: listLoading } = useExperiencesList();

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const relatedExperiences = (allExperiences || [])
        .filter(e => e.slug !== slug)
        .slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading || listLoading) return null;

    if (!experience || error) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
                <h2 className="text-3xl font-serif text-[#0f1f47] uppercase tracking-wider mb-4">Experience Not Found</h2>
                <button
                    onClick={() => navigate('/experiences')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f1f47] text-white font-semibold uppercase tracking-wider hover:bg-[#9b7b45] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Experiences
                </button>
            </div>
        );
    }

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = "auto";
    };

    const gallery = experience.gallery || [];
    const featuredImage = gallery[0] || (experience.featured_image?.startsWith('http') ? experience.featured_image : `https://hotel-aashirwad-cms-main-z0uqd8.free.laravel.cloud/${experience.featured_image}`);

    return (
        <article className="min-h-screen bg-white">
            <SEO 
                title={experience.name}
                description={experience.excerpt}
                image={featuredImage}
                url={`/experiences/${slug}`}
                type="website"
            />
            <CommonHeader
                title={experience.name}
                description={experience.excerpt}
                image={featuredImage}
                imageAlt={experience.name}
                heightClassName="h-[55vh]"
                minHeightClassName="min-h-[450px]"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-[#e5e5e5]">
                    <nav className="flex items-center gap-2 text-sm text-[#4f4f4f] uppercase tracking-wider">
                        <Link to="/" className="hover:text-[#9b7b45] transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/experiences" className="hover:text-[#9b7b45] transition-colors">Experiences</Link>
                        <span>/</span>
                        <span className="text-[#0f1f47] font-semibold">{experience.name}</span>
                    </nav>

                    <button
                        onClick={() => navigate('/experiences')}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#4f4f4f] hover:text-[#0f1f47] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 text-[#9b7b45]" />
                        All Experiences
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Description */}
                        <section>
                            <h2 className="text-3xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6">About the Experience</h2>
                            <p className="text-[#4f4f4f] leading-relaxed text-justify text-lg bg-[#f9f8f6] p-8 border-l-4 border-[#9b7b45]">
                                {experience.description}
                            </p>
                        </section>

                        {/* Image Gallery */}
                        <section className="space-y-4">
                            <h2 className="text-2xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6">Gallery</h2>
                            {gallery.length > 0 && (
                                <div
                                    className="w-full h-[400px] md:h-[500px] cursor-pointer group relative overflow-hidden"
                                    onClick={() => openLightbox(0)}
                                >
                                    <img
                                        src={gallery[0]}
                                        alt="Featured"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize className="text-white w-8 h-8" />
                                    </div>
                                </div>
                            )}

                            {gallery.length > 1 && (
                                <div className="grid grid-cols-3 gap-4">
                                    {gallery.slice(1, 4).map((img, idx) => (
                                        <div
                                            key={idx + 1}
                                            className="h-[120px] sm:h-[180px] cursor-pointer group relative overflow-hidden"
                                            onClick={() => openLightbox(idx + 1)}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* What's Included */}
                        <section>
                            <h2 className="text-2xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6">What's Included</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mt-6">
                                {(experience.includes || []).map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#9b7b45] flex-shrink-0" />
                                        <span className="text-[#4f4f4f]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar (Right) - Practical Info & Booking Widget */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-8">

                            {/* Key Info Card */}
                            <div className="bg-[#f7f5f1] border border-[#e5e5e5] p-8">
                                <h3 className="font-serif text-[#0f1f47] text-2xl uppercase tracking-wide mb-6 pb-6 border-b border-[#d8d1c2]">
                                    Key Details
                                </h3>

                                <div className="space-y-6">
                                    {experience.duration && (
                                        <div className="flex items-start gap-4">
                                            <Clock className="w-5 h-5 text-[#9b7b45] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Duration</p>
                                                <p className="text-[#0f1f47]">{experience.duration}</p>
                                            </div>
                                        </div>
                                    )}

                                    {experience.availability && (
                                        <div className="flex items-start gap-4">
                                            <Calendar className="w-5 h-5 text-[#9b7b45] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Availability</p>
                                                <p className="text-[#0f1f47]">{experience.availability}</p>
                                            </div>
                                        </div>
                                    )}

                                    {experience.group_size && (
                                        <div className="flex items-start gap-4">
                                            <Users className="w-5 h-5 text-[#9b7b45] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Group Size</p>
                                                <p className="text-[#0f1f47]">{experience.group_size}</p>
                                            </div>
                                        </div>
                                    )}

                                    {experience.requirements && (
                                        <div className="flex items-start gap-4">
                                            <Navigation className="w-5 h-5 text-[#9b7b45] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Requirements</p>
                                                <p className="text-[#0f1f47]">{experience.requirements}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Booking CTA */}
                            <div className="bg-[#0f1f47] p-8 text-white text-center shadow-2xl">
                                <h3 className="font-serif text-2xl uppercase tracking-wide mb-2">Reserve Now</h3>
                                <p className="text-3xl font-bold text-[#9b7b45] mb-6">{experience.price}</p>

                                <button className="w-full py-4 bg-white text-[#0f1f47] font-semibold uppercase tracking-widest hover:bg-[#9b7b45] hover:text-white transition-colors">
                                    Book This Experience
                                </button>

                                <p className="mt-4 text-xs text-white/70 uppercase tracking-wider">
                                    Subject to availability
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Related Experiences Section */}
                <div className="mt-24 pt-16 border-t border-[#e5e5e5]">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-serif text-[#0f1f47] uppercase tracking-wide">More Experiences</h2>
                        <Link to="/experiences" className="hidden sm:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0f1f47] hover:text-[#9b7b45] transition-colors">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {relatedExperiences.map(exp => (
                            <Link
                                to={`/experiences/${exp.slug || exp.id}`}
                                key={exp.id}
                                className="group block"
                            >
                                <div className="h-72 overflow-hidden relative mb-4">
                                    <img
                                        src={exp.featured_image ? (exp.featured_image.startsWith('http') ? exp.featured_image : `https://hotel-aashirwad-cms-main-z0uqd8.free.laravel.cloud/${exp.featured_image}`) : "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"}
                                        alt={exp.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <h3 className="font-serif text-xl text-[#0f1f47] uppercase tracking-wide group-hover:text-[#9b7b45] transition-colors mb-2">
                                    {exp.name}
                                </h3>
                                <p className="text-[#6a6a6a] text-sm line-clamp-2">
                                    {exp.excerpt || exp.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Overlay */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/70 hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(curr => curr === 0 ? gallery.length - 1 : curr - 1); }}
                        className="absolute left-4 lg:left-10 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <ChevronLeft className="w-10 h-10 md:w-14 md:h-14" />
                    </button>

                    <img
                        src={gallery[currentImageIndex]}
                        alt="Lightbox View"
                        className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
                    />

                    <button
                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(curr => curr === gallery.length - 1 ? 0 : curr + 1); }}
                        className="absolute right-4 lg:right-10 text-white/50 hover:text-white transition-colors p-2"
                    >
                        <ChevronRight className="w-10 h-10 md:w-14 md:h-14" />
                    </button>

                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 tracking-widest text-sm font-semibold">
                        {currentImageIndex + 1} / {gallery.length}
                    </div>
                </div>
            )}
        </article>
    );
};

export default ExperienceDetail;
