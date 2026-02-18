import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
    const experiences = [
        {
            role: "Full-Stack Developer (Freelance)",
            company: "Self-Employed",
            period: "2025 - Present",
            description: "Delivering custom MERN stack solutions for various clients. Specialized in Clinic Management, Job Portals, and Real Estate platforms.",
            highlights: ["React.js", "Node.js", "Next.js", "TypeScript"]
        },
        {
            role: "Software Developer Intern",
            company: "Skillhub IT Solutions",
            period: "Present",
            description: "Contributing to the development of enterprise-level applications, focusing on scalable architecture and modern UI/UX implementation.",
            highlights: ["MERN Stack", "API Integration", "Tailwind CSS"]
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Professional <span className="text-accent-secondary">Path</span>
                    </motion.h2>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative pl-8 border-l border-white/10"
                        >
                            <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-accent-secondary shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <div className="text-accent-secondary font-medium flex items-center gap-2">
                                        <Briefcase size={14} /> {exp.company}
                                    </div>
                                </div>
                                <div className="px-4 py-1.5 glass rounded-full text-xs font-bold text-white/60 flex items-center gap-2">
                                    <Calendar size={14} /> {exp.period}
                                </div>
                            </div>

                            <p className="text-white/50 mb-6 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.highlights.map(h => (
                                    <span key={h} className="text-[10px] px-2 py-1 bg-white/[0.03] border border-white/10 rounded-md text-white/40">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
