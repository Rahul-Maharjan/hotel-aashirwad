import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useExperienceHero } from '../hooks/useExperienceHero';
import { useExperiencesList } from '../hooks/useExperiencesList';
import CommonHeader from '../components/CommonHeader';

const Experiences = () => {
    const { data: heroData, loading: heroLoading } = useExperienceHero();
    const { data: experiencesData, loading: experiencesLoading } = useExperiencesList();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (heroLoading || experiencesLoading) return null;

    return (
        <div className="min-h-screen bg-white pb-20">
            <CommonHeader
                title={heroData?.headline || "EXPERIENCES"}
                description={heroData?.description || "Curated to perfection, our exclusive experiences are designed to awaken your senses and create unforgettable memories during your stay. Explore the finest wellness, culinary, and cultural moments."}
                image={heroData?.featured_image || "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"}
                imageAlt="Experiences Header"
            />

            {/* Experiences Grid / Alternating Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 mt-20">
                {(experiencesData || []).map((exp, index) => {
                    const isEven = index % 2 === 0;
                    const imageUrl = exp.featured_image 
                        ? (exp.featured_image.startsWith('http') ? exp.featured_image : `https://hotel-aashirwad-cms-main-z0uqd8.free.laravel.cloud/storage/${exp.featured_image}`)
                        : "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop";

                    return (
                        <div key={exp.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}>
                            {/* Image Section */}
                            <div className="w-full lg:w-3/5">
                                <div className="relative overflow-hidden group">
                                    <Link to={`/experiences/${exp.slug || exp.id}`}>
                                        <img 
                                            src={imageUrl} 
                                            alt={exp.name} 
                                            className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="w-full lg:w-2/5 p-4 lg:p-0 flex flex-col items-start text-left">
                                <h2 className="text-3xl md:text-4xl font-serif text-[#0f1f47] uppercase tracking-wider leading-tight mb-4">
                                    {exp.name}
                                </h2>
                                
                                <p className="text-[#2d2d2d] leading-relaxed mb-6">
                                    {exp.excerpt || exp.description}
                                </p>

                                <ul className="space-y-2 mb-10 w-full">
                                    {(exp.includes || []).slice(0, 4).map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-[#4f4f4f] text-sm md:text-base">
                                            <span className="mr-3 font-bold text-lg">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    to={`/experiences/${exp.slug || exp.id}`}
                                    className="group inline-flex items-center text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#4f4f4f]"
                                >
                                
                                    <span className="text-[#9b7b45] group-hover:text-[#0f1f47] transition-colors flex items-center">
                                        Discover more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experiences;
