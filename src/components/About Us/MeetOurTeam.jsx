import React from 'react';
import { motion } from 'framer-motion';
import { useHospitalitySection } from '../../hooks/useHospitalitySection';

const MeetOurTeam = () => {
    const { data, loading } = useHospitalitySection();

    if (loading) return null;

    const teamMembers = data?.team_members || [];

    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div 
                    className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl">
                        <div className="w-16 h-px bg-[#0f1f47] mb-8"></div>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#0f1f47] uppercase tracking-wider leading-tight">
                            {data?.headline?.split(' ')[0]} {data?.headline?.split(' ')[1]} {data?.headline?.split(' ')[2]} <br />
                            <span className="text-[#9b7b45] italic normal-case font-serif tracking-normal">
                                {data?.headline?.split(' ').slice(3).join(' ') || data?.section_title}
                            </span>
                        </h2>
                    </div>
                    <p className="text-[#6a6a6a] max-w-md text-sm uppercase tracking-wider leading-relaxed md:text-right">
                        {data?.description || "Behind every flawless stay is a team of dedicated professionals who elevate service into an art form."}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id || index}
                            className="group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full h-[400px] overflow-hidden mb-6">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-serif text-[#0f1f47] uppercase tracking-wide mb-2 transition-colors duration-300">
                                    {member.name}
                                </h4>
                                <p className="text-xs text-[#9b7b45] uppercase tracking-widest font-semibold">
                                    {member.team_position}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MeetOurTeam;
