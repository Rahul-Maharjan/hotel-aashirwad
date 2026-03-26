import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAboutExperienceSection } from '../../hooks/useAboutExperienceSection';
import { useExperiencesList } from '../../hooks/useExperiencesList';

const HotelServices = () => {
    const { data: sectionData, loading: sectionLoading } = useAboutExperienceSection();
    const { data: experiences, loading: experiencesLoading } = useExperiencesList();

    if (sectionLoading || experiencesLoading) return null;

    const signatureServices = experiences || [];

    return (
        <section className="py-24 md:py-32 bg-[#001233] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div 
                        className="max-w-2xl"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-widest mb-6">
                           {sectionData?.section_title || "Signature"} <span className="text-[#9b7b45]">{sectionData?.headline?.split(' ')[1] || "Services"}</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {sectionData?.description || "We curate exclusively tailored services designed to elevate your stay, ensuring that elegance and impeccable attention to detail follow you throughout the property."}
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/experiences" className="group inline-flex items-center text-sm uppercase tracking-widest font-medium text-white border-b border-[#9b7b45] pb-2 hover:text-[#9b7b45] transition-colors">
                            All Experiences 
                            <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {signatureServices.map((service, index) => (
                        <motion.div
                            key={service.id || index}
                            className="group relative cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Link to={`/experiences/${service.slug}`}>
                                <div className="relative h-[500px] overflow-hidden">
                                    <img 
                                        src={service.featured_image} 
                                        alt={service.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                                </div>
                                
                                <div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/20 bg-gradient-to-t from-[#001233] to-transparent">
                                    <h3 className="text-2xl font-serif uppercase tracking-wide mb-3 text-white group-hover:text-[#9b7b45] transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-sm text-gray-300 line-clamp-2 mb-4">
                                        {service.excerpt}
                                    </p>
                                    
                                    {/* Includes / Experts */}
                                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {service.includes?.slice(0, 3).map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-semibold">
                                                <div className="w-1.5 h-1.5 bg-[#9b7b45] rounded-full" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HotelServices;
