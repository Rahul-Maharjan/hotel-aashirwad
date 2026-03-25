import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Car, 
  Shirt, 
  Utensils, 
  Sparkles, 
  Users, 
  UtensilsCrossed, 
  HeartHandshake 
} from 'lucide-react';
import { useWhyChooseUs } from '../../hooks/useWhyChooseUs';

const iconMap = {
  wifi: <Wifi className="w-8 h-8 text-[#9b7b45]" />,
  car: <Car className="w-8 h-8 text-[#9b7b45]" />,
  laundry: <Shirt className="w-8 h-8 text-[#9b7b45]" />,
  tshirt: <Shirt className="w-8 h-8 text-[#9b7b45]" />,
  utensils: <Utensils className="w-8 h-8 text-[#9b7b45]" />,
  sparkles: <Sparkles className="w-8 h-8 text-[#9b7b45]" />,
  users: <Users className="w-8 h-8 text-[#9b7b45]" />,
  'heart-handshake': <HeartHandshake className="w-8 h-8 text-[#9b7b45]" />,
};

const WhyChooseUs = () => {
    const { data, loading } = useWhyChooseUs();

    if (loading) return null;

    const items = data?.items || [];

    return (
        <section className="py-24 md:py-32 bg-white border-t border-[#e5e5e5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-px bg-[#0f1f47] opacity-60"></div>
                        <div className="w-3 h-3 border border-[#0f1f47] transform rotate-45 mx-2 bg-transparent"></div>
                        <div className="w-16 h-px bg-[#0f1f47] opacity-60"></div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#0f1f47] uppercase tracking-[0.15em] mb-6">
                        {data?.headline || "Why Choose Us"}
                    </h2>
                    <p className="text-[#4f4f4f] text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wider">
                        {data?.description || "Experience the gold standard of luxury hospitality."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id || index}
                            className="flex flex-col items-center text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-20 h-20 rounded-full border border-[#e5e5e5] bg-[#f9f8f6] flex items-center justify-center mb-6 group-hover:border-[#9b7b45] transition-colors duration-500">
                                {iconMap[item.icon] || <Sparkles className="w-8 h-8 text-[#9b7b45]" />}
                            </div>
                            <h3 className="text-xl font-serif text-[#0f1f47] uppercase tracking-wide mb-4">
                                {item.service_name}
                            </h3>
                            <p className="text-[#6a6a6a] leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
