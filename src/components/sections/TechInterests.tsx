import React from 'react';
import { motion } from 'framer-motion';
import {
    Atom, Server, Database, Cloud, Flame, Wind, Layers,
    Smartphone, Code, Film, Coffee, Puzzle, Plane,
    Dumbbell, Brain, Book, PenTool, Gamepad2, Music, Trophy
} from 'lucide-react';

const TechInterests: React.FC = () => {
    const techStack = [
        { name: 'React', icon: <Atom size={20} className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <div className="font-bold text-white text-xs">N</div> },
        { name: 'Node.js', icon: <Server size={20} className="text-[#339933]" /> },
        { name: 'Express.js', icon: <Server size={20} className="text-white/40" /> },
        { name: 'TypeScript', icon: <div className="font-bold text-[#3178C6] text-xs">TS</div> },
        { name: 'Tailwind CSS', icon: <Wind size={20} className="text-[#06B6D4]" /> },
        { name: 'Material UI', icon: <Layers size={20} className="text-[#007FFF]" /> },
        { name: 'MongoDB', icon: <Database size={20} className="text-[#47A248]" /> },
        { name: 'PostgreSQL', icon: <Database size={20} className="text-[#4169E1]" /> },
        { name: 'AWS', icon: <Cloud size={20} className="text-[#FF9900]" /> },
        { name: 'Firebase', icon: <Flame size={20} className="text-[#FFCA28]" /> },
        { name: 'React Native', icon: <Smartphone size={20} className="text-[#61DAFB]" /> },
    ];

    const interests = [
        { name: 'Coding', icon: <Code size={20} className="text-orange-500" /> },
        { name: 'Films', icon: <Film size={20} className="text-blue-500" /> },
        { name: 'Coffee', icon: <Coffee size={20} className="text-amber-700" /> },
        { name: 'Puzzles', icon: <Puzzle size={20} className="text-green-500" /> },
        { name: 'Travel', icon: <Plane size={20} className="text-cyan-500" /> },
        { name: 'Fitness', icon: <Dumbbell size={20} className="text-red-500" /> },
        { name: 'Science', icon: <Brain size={20} className="text-purple-500" /> },
        { name: 'Reading', icon: <Book size={20} className="text-indigo-500" /> },
        { name: 'Design', icon: <PenTool size={20} className="text-pink-500" /> },
        { name: 'Gaming', icon: <Gamepad2 size={20} className="text-yellow-500" /> },
        { name: 'Music', icon: <Music size={20} className="text-emerald-500" /> },
        { name: 'Chess', icon: <Trophy size={20} className="text-amber-500" /> },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Tech Stack Section */}
                <div className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-center mb-12 text-orange-500"
                    >
                        Tech Stack & Tools
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.05] transition-colors">
                                    {tech.icon}
                                </div>
                                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Beyond Coding Section */}
                <div>
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl font-bold mb-4 text-orange-500"
                        >
                            Beyond Coding
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed"
                        >
                            When I'm not architecting systems or debugging code, you'll find me exploring these passions
                            that fuel my creativity and problem-solving skills.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {interests.map((interest, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                transition={{ delay: idx * 0.05 }}
                                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.05] transition-colors">
                                    {interest.icon}
                                </div>
                                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                    {interest.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechInterests;
