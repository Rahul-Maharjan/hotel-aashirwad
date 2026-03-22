import React from 'react';
import { motion } from 'framer-motion';
import hotelImg from "../../assets/hotel/hotel_exterior_01.jpg";
import hotelImg2 from "../../assets/hotel/hotel_exterior_02.jpg";

const HotelIntro = () => {
    return (
        <section className="py-24 md:py-32 bg-[#f9f8f6] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Text Content */}
                    <motion.div 
                        className="w-full lg:w-1/2 flex flex-col items-start"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Decorative Line */}
                        <div className="w-16 h-px bg-[#9b7b45] mb-8"></div>
                        
                        <h2 className="text-3xl md:text-5xl font-serif text-[#0f1f47] uppercase tracking-wider leading-tight mb-8">
                            A Legacy of <br className="hidden md:block" />
                            <span className="text-[#9b7b45] italic normal-case font-serif tracking-normal">Timeless Elegance</span>
                        </h2>
                        
                        <div className="space-y-6 text-[#4f4f4f] leading-relaxed text-lg text-justify">
                            <p>
                                Nestled in the heart of Pokhara with sweeping views of the Himalayas, Hotel Aashirwad is more than a stay—it is an experience woven from family heritage, legendary warmth, and an unwavering commitment to luxury.
                            </p>
                            <p>
                                Since opening our doors in 2010, we have welcomed travelers seeking serene lakeside mornings, curated comforts, and authentic mountain hospitality. Every detail, from our sunlit courtyards to our bespoke suites, is designed to offer a tranquil sanctuary away from the ordinary.
                            </p>
                        </div>
                        
                        <div className="mt-12 flex gap-12">
                            <div>
                                <p className="text-4xl font-serif text-[#0f1f47] mb-2">10+</p>
                                <p className="text-xs uppercase tracking-widest text-[#6a6a6a] font-semibold">Years of Excellence</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif text-[#0f1f47] mb-2">50k</p>
                                <p className="text-xs uppercase tracking-widest text-[#6a6a6a] font-semibold">Happy Guests</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Collage */}
                    <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
                        <motion.div 
                            className="absolute top-0 right-0 w-[80%] h-[80%] z-10"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img 
                                src={hotelImg}
                                alt="Hotel Architecture"
                                className="w-full h-full object-cover shadow-2xl"
                            />
                        </motion.div>
                        
                        <motion.div 
                            className="absolute bottom-0 left-0 w-[60%] h-[60%] z-20 border-8 border-[#f9f8f6]"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <img 
                                src={hotelImg2}
                                alt="Hotel Detail"
                                className="w-full h-full object-cover shadow-2xl"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HotelIntro;
