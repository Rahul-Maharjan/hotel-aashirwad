import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTestimonials } from '../../hooks/useTestimonials';

const Testimonials = () => {
    const { data, loading } = useTestimonials();

    if (loading) return null;

    const reviews = data || [];

    return (
        <section className="py-24 md:py-32 bg-[#f9f8f6] border-t border-[#e5e5e5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm font-semibold text-[#9b7b45] uppercase tracking-widest mb-4">Guest Book</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-[#0f1f47] leading-tight">
                        Words from our <span className="italic">Guests</span>
                    </h3>
                </motion.div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.id || i}
                            className="bg-white p-10 md:p-14 shadow-sm border border-[#e5e5e5] relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-6 left-8 text-6xl font-serif text-[#f9f8f6] leading-none select-none">
                                "
                            </div>
                            
                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} className="w-4 h-4 fill-[#9b7b45] text-[#9b7b45]" />
                                    ))}
                                </div>
                                
                                <p className="text-[#4f4f4f] font-serif italic text-lg leading-relaxed mb-8">
                                    "{review.testimonial}"
                                </p>
                                
                                <div className="border-t border-[#e5e5e5] pt-6 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-[#0f1f47] uppercase tracking-widest text-sm font-bold mb-1">
                                            {review.name}
                                        </h4>
                                        <p className="text-xs text-[#6a6a6a] uppercase tracking-wider">
                                            Via {review.platform}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
