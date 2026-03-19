import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { activitiesData } from '../data/activitiesData';
import CommonHeader from '../components/CommonHeader';

const Activities = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#f9f8f6] pb-20">
            <CommonHeader
                title="ACTIVITIES"
                description="Discover the spirit of Pokhara. From thrilling aerial adventures to mindful moments in nature, our curated activities promise to elevate your stay."
                image="https://images.unsplash.com/photo-1596766448374-de753df183a3?q=80&w=1200&auto=format&fit=crop"
                imageAlt="Activities Header"
            />

            {/* Activities Grid / Alternating Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 mt-20">
                {activitiesData.map((act, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div key={act.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20 bg-white p-6 sm:p-0 sm:bg-transparent shadow-sm sm:shadow-none`}>
                            {/* Image Section */}
                            <div className="w-full lg:w-3/5">
                                <div className="relative overflow-hidden group">
                                    <Link to={`/activities/${act.id}`}>
                                        <img 
                                            src={act.image} 
                                            alt={act.imageAlt} 
                                            className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105 shadow-md"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="w-full lg:w-2/5 p-4 lg:p-0 flex flex-col items-start text-left sm:bg-[#f9f8f6]">
                                <h2 className="text-3xl md:text-4xl font-serif text-[#0f1f47] uppercase tracking-wider leading-tight mb-4">
                                    {act.name}
                                </h2>
                                
                                <p className="text-[#2d2d2d] leading-relaxed mb-6 italic font-serif">
                                    "{act.shortDescription}"
                                </p>

                                <ul className="space-y-3 mb-10 w-full">
                                    {act.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-[#4f4f4f] text-sm md:text-base border-b border-[#e5e5e5] pb-2 last:border-0">
                                            <span className="mr-3 font-bold text-lg text-[#9b7b45]">✦</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    to={`/activities/${act.id}`}
                                    className="group inline-flex items-center text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#4f4f4f]"
                                >
                                    <span className="border border-[#1f1f1f] px-8 py-3 mr-6 hover:bg-[#1f1f1f] hover:text-white transition-colors duration-300">
                                        EXPLORE
                                    </span>
                                    <span className="text-[#9b7b45] group-hover:text-[#0f1f47] transition-colors flex items-center">
                                        View Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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

export default Activities;
