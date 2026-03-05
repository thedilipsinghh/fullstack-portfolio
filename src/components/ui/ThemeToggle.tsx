import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 dark:bg-black/5 dark:border-black/10 hover:border-accent-primary/50 transition-all group overflow-hidden"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0, rotate: 45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: -45 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <Moon size={18} className="text-white group-hover:text-accent-primary transition-colors" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0, rotate: 45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: -45 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <Sun size={18} className="text-black group-hover:text-accent-primary transition-colors" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="toggle-glow"
            />
        </button>
    );
};

export default ThemeToggle;
