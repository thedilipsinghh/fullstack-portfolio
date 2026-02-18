import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    amplitude?: number;
    className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
    children,
    delay = 0,
    duration = 6,
    amplitude = 20,
    className = ""
}) => {
    return (
        <motion.div
            animate={{
                y: [0, -amplitude, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FloatingElement;
