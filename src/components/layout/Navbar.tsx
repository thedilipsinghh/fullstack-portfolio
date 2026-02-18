import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Atom, Github, Instagram, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const socials = [
        { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com/thedilipsinghh' },
        { name: 'GitHub', icon: <Github size={18} />, href: 'https://github.com/thedilipsinghh' },
        { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/thedilipsinghh' },
    ];


    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="w-12 h-12 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                        <Atom size={28} className="text-accent-primary animate-[spin_8s_linear_infinite]" />
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className="text-2xl font-black tracking-tighter text-white">
                            Dilip<span className="text-accent-primary">Singh</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.25em] font-black text-orange-500">
                            Mern Stack Developer
                        </span>
                    </div>
                </motion.div>

                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-8 pr-8 border-r border-white/10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-white/50 hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            download="Dilip_Singh_Resume.pdf"
                            className="ml-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-accent-primary/50 text-white rounded-xl text-xs font-bold transition-all"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                <button className="md:hidden text-foreground/70 hover:text-accent-primary transition-colors">
                    <Atom size={24} className="animate-[spin_8s_linear_infinite]" />
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
