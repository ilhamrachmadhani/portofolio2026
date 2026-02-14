import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            year: "Agu 2025 — Feb 2026",
            role: "Android Developer",
            company: "Universitas Bakrie (Thesis Project)",
            description: "Membangun aplikasi perpustakaan digital end-to-end menggunakan Kotlin dan MySQL. Merancang antarmuka responsif (XML) dan mengelola database relasional kompleks untuk menangani transaksi peminjaman secara efisien[cite: 20, 21, 23, 24, 25]."
        },
        {
            year: "Mar 2025 — Jun 2025",
            role: "Asisten Laboratorium (OOP Java)",
            company: "Universitas Bakrie",
            description: "Membimbing 60+ mahasiswa dalam konsep OOP Java (Inheritance, Polymorphism). [cite_start]Meningkatkan tingkat penyelesaian tugas sebesar 25% melalui mentoring intensif dan debugging kode[cite: 35, 38, 39, 40]."
        },
        {
            year: "Sep 2024 — Des 2024",
            role: "Android Developer (Capstone)",
            company: "Bangkit Academy (Google, GoTo, Traveloka)",
            description: "Mengembangkan aplikasi 'NutriScan' berbasis Kotlin dengan Clean Architecture dan MVVM. [cite_start]Mengimplementasikan integrasi API (Retrofit) dan Room Database, serta meningkatkan akurasi model ML hingga 85%[cite: 10, 11, 14, 15, 16, 19, 52]."
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
                        Experience
                    </h2>
                </div>
                <div className="md:col-span-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0 border-l md:border-l-0 border-gray-200 dark:border-zinc-800 md:grid md:grid-cols-8 md:gap-8"
                        >
                            {/* Mobile timeline dot */}
                            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 md:hidden"></div>

                            <div className="md:col-span-2 mb-2 md:mb-0">
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-500 tabular-nums">
                                    {exp.year}
                                </span>
                            </div>
                            <div className="md:col-span-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                                    {exp.role}
                                </h3>
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                                    {exp.company}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
