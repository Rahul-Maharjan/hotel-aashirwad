import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        title: "The Royal Spa",
        description: "Rejuvenate your body and spirit with ancient wellness techniques and modern therapies.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Fine Dining",
        description: "A culinary journey featuring organic ingredients, masterfully crafted by world-class chefs.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Infinity Pool",
        description: "Lounge by our temperature-controlled pool that seems to spill directly into the horizon.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
    }
];

const HotelServices = () => {
    return (
        <section className="py-24 md:py-32 bg-[#0f1f47] text-white">
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
                            Signature <span className="text-[#9b7b45]">Services</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            We curate exclusively tailored services designed to elevate your stay, ensuring that elegance and impeccable attention to detail follow you throughout the property.
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-[450px] overflow-hidden">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/20 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-2xl font-serif uppercase tracking-wide mb-3 text-white group-hover:text-[#9b7b45] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-300 line-clamp-2">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HotelServices;
