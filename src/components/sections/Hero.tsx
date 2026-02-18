import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ArrowRight } from 'lucide-react';
import FloatingElement from '../ui/FloatingElement';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                        </span>
                        AVAILABLE FOR FREELANCE
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                        Building <br />
                        <span className="text-gradient">Scalable Solutions</span> <br />
                        for the Future.
                    </h1>

                    <p className="text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
                        Hi, I'm <span className="font-extrabold text-white">Dilip Singh</span>, a Full-Stack MERN Developer who builds real-world web applications using React, Node.js, Express, and MongoDB, focusing on clean code and performance.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-full font-bold flex items-center gap-2 transition-all shadow-lg shadow-accent-primary/20"
                        >
                            View Projects <ArrowRight size={18} />
                        </motion.a>
                        <a
                            href="/resume.pdf"
                            download="Dilip_Singh_Resume.pdf"
                            className="px-8 py-4 border border-white/10 rounded-full font-bold transition-all hover:bg-white/5 flex items-center gap-2"
                        >
                            Download Resume
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                        </a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-white/10 rounded-full font-bold transition-all"
                        >
                            Let's Connect
                        </motion.a>
                    </div>
                </motion.div>

                <div className="relative flex justify-center items-center">
                    <FloatingElement amplitude={30} duration={8}>
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Complex Glass Element */}
                            <div className="absolute inset-0 glass rounded-3xl rotate-12 -z-10 animate-slow-drift"></div>
                            <div className="absolute inset-0 glass rounded-3xl -rotate-6 overflow-hidden">
                                <div className="w-full h-full p-8 flex flex-col justify-between relative">
                                    <div className="absolute inset-0 z-0 opacity-40 group hover:opacity-100 transition-opacity duration-500">
                                        <img
                                            src="/dilip-profile.jpg"
                                            alt="Dilip Singh Profile"
                                            className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="relative z-10 flex justify-between items-start">
                                        <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
                                            <MousePointer2 className="text-accent-primary" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Status</div>
                                            <div className="text-xs font-black text-accent-primary bg-accent-primary/10 px-2 py-0.5 rounded-md">ACTIVE</div>
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-1 font-bold">Current Tech</div>
                                        <div className="text-xl font-black text-foreground drop-shadow-sm">MERN STACK</div>
                                    </div>
                                </div>
                            </div>

                            {/* Orbital Elements */}
                            <FloatingElement delay={1} amplitude={15} duration={5} className="absolute -top-10 -right-10 w-20 h-20 glass rounded-full flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-accent-secondary/30 blur-xl absolute"></div>
                                <span className="text-xs font-bold">React</span>
                            </FloatingElement>

                            <FloatingElement delay={2} amplitude={20} duration={7} className="absolute -bottom-8 -left-8 w-16 h-16 glass rounded-2xl flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-accent-tertiary/30 blur-xl absolute"></div>
                                <span className="text-xs font-bold">Node</span>
                            </FloatingElement>
                        </div>
                    </FloatingElement>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
