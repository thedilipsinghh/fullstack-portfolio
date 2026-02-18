import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Clinic Management System",
            category: "Full Stack / Health-Tech",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
            description: "A comprehensive solution for clinics to manage patient records, appointments, and billing with real-time sync.",
            tags: ["MERN", "Socket.io", "Tailwind"],
            link: "#"
        },
        {
            title: "Job Profile Web App",
            category: "Full Stack / Recruitment",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
            description: "A professional platform for managing job profiles, candidate tracking, and recruitment workflows with real-time updates.",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Rent Management Portal",
            category: "Web App / Real Estate",
            image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800",
            description: "End-to-end platform for landlords and tenants to handle leases, payments, and maintenance requests.",
            tags: ["TypeScript", "Node.js", "MongoDB"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Featured <span className="text-accent-tertiary">Work</span>
                    </motion.h2>
                    <p className="text-white/40 max-w-sm mx-auto">
                        Exploring the intersection of complex logic and intuitive design.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col items-center text-center"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10 glass">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>

                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                                    <span className="px-3 py-1 rounded-full bg-accent-tertiary/20 border border-accent-tertiary/30 text-accent-tertiary text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-accent-tertiary transition-colors">{project.title}</h3>
                            <p className="text-sm text-white/50 mb-6 line-clamp-2 max-w-xs">{project.description}</p>

                            <div className="flex flex-wrap justify-center gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] text-white/30 font-medium">#{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
