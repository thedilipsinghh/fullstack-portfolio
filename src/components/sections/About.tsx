import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Globe } from 'lucide-react';

const About: React.FC = () => {
    const highlights = [
        {
            icon: <Shield className="text-accent-primary" />,
            title: "Scalable Architecture",
            desc: "Building foundations that grow with your vision."
        },
        {
            icon: <Zap className="text-accent-secondary" />,
            title: "High Performance",
            desc: "Optimized for speed, efficiency, and seamless UX."
        },
        {
            icon: <Target className="text-accent-tertiary" />,
            title: "Precision Driven",
            desc: "Meticulous attention to detail in every line of code."
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <h2 className="text-4xl font-bold mb-8">
                                Beyond the <span className="text-accent-secondary">Interface</span>.
                            </h2>
                            <div className="space-y-6 text-foreground/70 leading-relaxed">
                                <p>
                                    I'm Dilip Singh, a Full-Stack MERN Developer passionate about crafting digital experiences
                                    that feel effortless. My journey in tech is driven by a fascination with complex systems
                                    and the desire to make them simple for users.
                                </p>
                                <p>
                                    Currently, I'm deep-diving into Clinic Management systems and Politician Visitor Management apps,
                                    where data integrity and real-time interactions are paramount. Whether it's a mobile app
                                    using React-Native or a desktop powerhouse with Electron.js, I bridge the gap between
                                    design and high-end engineering.
                                </p>
                                <div className="flex items-center gap-4 text-foreground p-4 glass rounded-2xl border-l-4 border-l-accent-secondary">
                                    <Globe className="text-accent-secondary" />
                                    <div>
                                        <div className="text-sm font-bold">Freelance Ready</div>
                                        <div className="text-xs text-foreground/40">Available for worldwide remote collaboration</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative element */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[100px] -z-10"></div>
                    </div>

                    <div className="grid gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="p-6 glass rounded-2xl flex gap-6 items-start group transition-all"
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center group-hover:border-accent-secondary/50 group-hover:bg-accent-secondary/10 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent-secondary transition-colors">{item.title}</h3>
                                    <p className="text-sm text-foreground/50">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
