import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-zinc-800/50 rounded-2xl p-8 md:p-16 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Got an idea or just want to say hi?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <a
                    href="mailto:ilhamrachmadhani00@gmail.com"
                    className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105"
                >
                    <Mail size={20} />
                    <span>Send me an email</span>
                    <ArrowRight size={20} />
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
