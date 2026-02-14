import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6"
                    >
                        About Me
                    </motion.h2>
                </div>
                <div className="md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                        <p>
                            Halo! Saya Ilham Rachmadhani. Perjalanan saya di dunia pemrograman dimulai dari rasa ingin tahu bagaimana sebuah aplikasi bisa mempermudah hidup banyak orang.
                        </p>
                        <p>
                            Sebagai lulusan Sistem Informasi Universitas Bakrie dan alumni Bangkit Academy, saya telah mendalami pengembangan aplikasi Android Native secara intensif. Saya tidak hanya menulis kode; saya merancang solusi. Dari membangun sistem deteksi nutrisi berbasis AI (NutriScan) hingga menciptakan ekosistem perpustakaan digital yang kompleks, saya selalu berpegang pada prinsip: aplikasi harus cepat, stabil, dan mudah digunakan.
                        </p>
                        <p>
                            Saat tidak sedang mengulik fitur baru di Kotlin atau mengoptimalkan arsitektur MVVM, saya aktif berbagi ilmu sebagai Asisten Laboratorium, membantu mahasiswa lain memahami konsep OOP Java. Saya siap mengubah ide kompleks menjadi pengalaman mobile yang seamless.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
