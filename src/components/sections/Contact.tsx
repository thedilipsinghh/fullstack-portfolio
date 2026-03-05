import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Instagram, ArrowRight, CornerRightDown } from 'lucide-react';

const Contact: React.FC = () => {
    const socials = [
        { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/thedilipsinghh', detail: '@thedilipsinghh' },
        { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://instagram.com/thedilipsinghh', detail: '@thedilipsinghh' },
        { name: 'Email', icon: <Mail size={20} />, href: 'mailto:ds4718421@gmail.com', detail: 'ds4718421@gmail.com' },
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="glass p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
                    {/* Background Highlight */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
                                Ready to <br />
                                <span className="text-gradient">Start Something</span> <br />
                                Incredible?
                            </h2>
                            <p className="text-foreground/50 text-lg mb-12">
                                I'm always open to discussing new projects, creative ideas or original opportunities.
                            </p>

                            <div className="space-y-6">
                                {socials.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-6 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                                            {social.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-widest text-foreground/40 mb-1">{social.name}</div>
                                            <div className="text-sm font-bold group-hover:text-accent-primary transition-colors">{social.detail}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex flex-col gap-8">
                                <div className="p-8 glass rounded-3xl border-accent-primary/20">
                                    <CornerRightDown className="text-accent-primary mb-6" />
                                    <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
                                    <p className="text-sm text-foreground/40 mb-8 leading-relaxed">
                                        Based in India, working worldwide. Generally responsive within 24 hours.
                                    </p>
                                    <motion.a
                                        href="mailto:ds4718421@gmail.com"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 bg-foreground text-background rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                                    >
                                        Send Message <ArrowRight size={20} />
                                    </motion.a>
                                </div>

                                <div className="text-center opacity-30 pointer-events-none mt-auto py-8">
                                    <div className="text-xs uppercase tracking-[0.5em] mb-2">Designed for the future</div>
                                    <div className="text-[10px]">© 2026 Dilip Singh. All Rights Reserved.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
