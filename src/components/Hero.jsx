import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/foto.jpeg';

const Hero = () => {
    return (

        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-zinc-900">


            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Background"
                    className="w-full h-full object-cover object-center md:object-right"
                    style={{
                        objectPosition: "center 60%",
                    }}
                />
            </div>

            <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent dark:from-zinc-900 dark:via-zinc-900/90 dark:to-transparent"></div>


            <div className="container mx-auto px-4 md:px-8 relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl text-center md:text-left"
                >

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-gray-900 dark:text-gray-100">
                        Hi, I’m Ilham - I enjoy building
                        <span className="text-gray-600 dark:text-gray-400"> clean</span> and
                        <span className="text-gray-600 dark:text-gray-400"> thoughtful</span> digital experiences.
                    </h1>


                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        An adaptive developer specializing in Native Android (Kotlin). I leverage MVVM architecture and modern Jetpack components to build high-performance, maintainable mobile solutions.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-8 flex items-center justify-center md:justify-start gap-4"
                    >
                        <a href="#work" className="text-gray-900 dark:text-gray-100 font-medium border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 transition-all">
                            See my work
                        </a>
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                            More about me
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;