import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useActivityDetail } from '../hooks/useActivityDetail';
import { useActivitiesList } from '../hooks/useActivitiesList';
import CommonHeader from '../components/CommonHeader';
import { 
    ArrowLeft, ArrowRight, Maximize, X, ChevronLeft, ChevronRight, 
    Clock, Calendar, Users, CheckCircle2, Navigation, Activity
} from 'lucide-react';

const ActivityDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const { data: activity, loading, error } = useActivityDetail(slug);
    const { data: allActivities, loading: listLoading } = useActivitiesList();

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const relatedActivities = (allActivities || [])
        .filter(a => a.slug !== slug)
        .slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading || listLoading) return null;

    if (!activity || error) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
                <h2 className="text-3xl font-serif text-[#0f1f47] uppercase tracking-wider mb-4">Activity Not Found</h2>
                <button
                    onClick={() => navigate('/activities')}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f1f47] text-white font-semibold uppercase tracking-wider hover:bg-[#9b7b45] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Activities
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

    const gallery = activity.gallery || [];
    const featuredImage = gallery[0] || (activity.featured_image?.startsWith('http') ? activity.featured_image : `https://hotel-aashirwad-cms-main-z0uqd8.free.laravel.cloud/storage/${activity.featured_image}`);

    return (
        <article className="min-h-screen bg-[#f9f8f6]">
            <CommonHeader
                title={activity.name}
                description={activity.excerpt}
                image={featuredImage}
                imageAlt={activity.name}
                heightClassName="h-[55vh]"
                minHeightClassName="min-h-[450px]"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-[#e5e5e5]">
                    <nav className="flex items-center gap-2 text-sm text-[#4f4f4f] uppercase tracking-wider">
                        <Link to="/" className="hover:text-[#9b7b45] transition-colors">Home</Link>
                        <span>/</span>
                        <Link to="/activities" className="hover:text-[#9b7b45] transition-colors">Activities</Link>
                        <span>/</span>
                        <span className="text-[#0f1f47] font-semibold">{activity.name}</span>
                    </nav>

                    <button
                        onClick={() => navigate('/activities')}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#4f4f4f] hover:text-[#0f1f47] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 text-[#9b7b45]" />
                        All Activities
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content (Left) */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Description */}
                        <section>
                            <h2 className="text-3xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6 flex items-center gap-3">
                                <Activity className="w-8 h-8 text-[#9b7b45]" />
                                About the Activity
                            </h2>
                            <p className="text-[#4f4f4f] leading-relaxed text-justify text-lg bg-white p-8 border border-[#e5e5e5] shadow-sm">
                                {activity.description}
                            </p>
                        </section>

                        {/* What's Included / Features */}
                        <section>
                            <h2 className="text-2xl font-serif text-[#0f1f47] uppercase tracking-wide mb-6">Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 bg-white p-8 border border-[#e5e5e5] shadow-sm">
                                {(activity.includes || []).map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#9b7b45] flex-shrink-0" />
                                        <span className="text-[#4f4f4f] font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
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

                    </div>

                    {/* Sidebar (Right) - Practical Info & Booking Widget */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-8">
                            
                            {/* Key Info Card */}
                            <div className="bg-white border-t-4 border-[#0f1f47] shadow-lg p-8">
                                <h3 className="font-serif text-[#0f1f47] text-2xl uppercase tracking-wide mb-6 pb-6 border-b border-[#d8d1c2]">
                                    Activity Details
                                </h3>
                                
                                <div className="space-y-6">
                                    {activity.duration && (
                                        <div className="flex items-start gap-4">
                                            <Clock className="w-5 h-5 text-[#9b7b45] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Duration</p>
                                                <p className="text-[#0f1f47]">{activity.duration}</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {activity.availability && (
                                        <div className="flex items-start gap-4">
                                            <Calendar className="w-5 h-5 text-[#9b7b45] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Availability</p>
                                                <p className="text-[#0f1f47]">{activity.availability}</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {activity.group_size && (
                                        <div className="flex items-start gap-4">
                                            <Users className="w-5 h-5 text-[#9b7b45] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Group Size</p>
                                                <p className="text-[#0f1f47]">{activity.group_size}</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {activity.requirements && (
                                        <div className="flex items-start gap-4">
                                            <Navigation className="w-5 h-5 text-[#9b7b45] flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-[#6a6a6a] font-semibold">Requirements</p>
                                                <p className="text-[#0f1f47] leading-snug">{activity.requirements}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Booking CTA */}
                            <div className="bg-[#f7f5f1] border border-[#e5e5e5] p-8 text-center text-[#0f1f47]">
                                <h3 className="font-serif text-2xl uppercase tracking-wide mb-2">Join Us</h3>
                                <p className="text-3xl font-bold text-[#9b7b45] mb-6">{activity.price}</p>
                                
                                <button className="w-full py-4 bg-[#0f1f47] text-white font-semibold uppercase tracking-widest hover:bg-[#9b7b45] transition-colors">
                                    Inquire Now
                                </button>
                                
                                <p className="mt-4 text-xs text-[#6a6a6a] uppercase tracking-wider">
                                    Advanced booking required
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Related Activities Section */}
                <div className="mt-24 pt-16 border-t border-[#e5e5e5]">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-serif text-[#0f1f47] uppercase tracking-wide">More Activities</h2>
                        <Link to="/activities" className="hidden sm:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#0f1f47] hover:text-[#9b7b45] transition-colors">
                            Explore All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {relatedActivities.map(act => (
                            <Link 
                                to={`/activities/${act.slug || act.id}`} 
                                key={act.id}
                                className="group block bg-white border border-[#e5e5e5] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img 
                                        src={act.featured_image ? (act.featured_image.startsWith('http') ? act.featured_image : `https://hotel-aashirwad-cms-main-z0uqd8.free.laravel.cloud/storage/${act.featured_image}`) : "https://images.unsplash.com/photo-1596766448374-de753df183a3?q=80&w=1200&auto=format&fit=crop"} 
                                        alt={act.name} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif text-xl text-[#0f1f47] uppercase tracking-wide group-hover:text-[#9b7b45] transition-colors mb-2">
                                        {act.name}
                                    </h3>
                                    <p className="text-[#6a6a6a] text-sm line-clamp-2">
                                        {act.excerpt || act.description}
                                    </p>
                                </div>
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

export default ActivityDetail;
