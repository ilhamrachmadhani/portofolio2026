import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "Python"]
        },
        {
            title: "Frameworks & Tools",
            skills: ["React", "Tailwind CSS", "Git", "Vite", "Figma"]
        },
        {
            title: "Currently Learning",
            skills: ["System Design", "Machine Learning", "Quality Assurance"]
        }
    ];

    return (
        <section className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
                        Tech Stack
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
