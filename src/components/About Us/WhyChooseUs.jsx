import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, UtensilsCrossed, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-[#9b7b45]" />,
    title: "Unmatched Serenity",
    description: "Relax in a sanctuary carefully curated for peace, with breathtaking views and quiet elegance at every turn.",
  },
  {
    icon: <Users className="w-8 h-8 text-[#9b7b45]" />,
    title: "Dedicated Experts",
    description: "Our multilingual concierge and staff are available around the clock to ensure your stay is flawless.",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-[#9b7b45]" />,
    title: "Gourmet Excellence",
    description: "Savor exquisite local flavors and international delicacies prepared by our award-winning executive chef.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-[#9b7b45]" />,
    title: "Heartfelt Hospitality",
    description: "We don’t just offer a room; we offer genuine care, anticipating your needs before they arise.",
  },
];

const WhyChooseUs = () => {
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
                        Why Choose Us
                    </h2>
                    <p className="text-[#4f4f4f] text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wider">
                        Experience the gold standard of luxury hospitality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-20 h-20 rounded-full border border-[#e5e5e5] bg-[#f9f8f6] flex items-center justify-center mb-6 group-hover:border-[#9b7b45] transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif text-[#0f1f47] uppercase tracking-wide mb-4">
                                {item.title}
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
