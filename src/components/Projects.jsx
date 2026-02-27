import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "NutriScan (Bangkit Capstone)",
            description: "Aplikasi Android pelacak nutrisi cerdas yang terintegrasi dengan Machine Learning untuk identifikasi buah dengan akurasi 85%. Dibangun menggunakan Clean Architecture untuk skalabilitas.",
            tech: ["Kotlin", "MVVM", "TensorFlow Lite", "Retrofit"],
            github: "https://github.com/Capstone-product/NutriScan.git",
            demo: "#"
        },
        {
            title: "Univ. Bakrie Library App",
            description: "Aplikasi manajemen perpustakaan digital end-to-end (Skripsi). Menangani sirkulasi peminjaman buku dan manajemen inventaris database secara real-time dan efisien.",
            tech: ["Kotlin", "MySQL", "Material Design", "MVVM"],
            github: "https://github.com/ilhamrachmadhani/Aplikasi-Perpustakaan-Smart-Library-.git",
            demo: "#"
        },
        {
            title: "Univ. Bakrie Library App",
            description: "Filter Wilayah Indonesia adalah aplikasi web yang memungkinkan pengguna menyaring data wilayah secara bertingkat mulai dari Provinsi, Kota/Kabupaten, hingga Kecamatan. Aplikasi ini dirancang dengan sistem filter dinamis dan pengelolaan state yang konsisten agar tetap stabil saat halaman di-refresh. Fokus utama pengembangan berada pada pengalaman pengguna yang bersih, responsif, dan terstruktur.",
            tech: ["HTML", "CSS", "ReactJS",],
            github: "https://github.com/ilhamrachmadhani/filter-wilayah",
            demo: "#"
        },
    ];

    return (
        <section id="work" className="py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6">
                        Selected Works
                    </h2>
                </div>
                <div className="md:col-span-8 space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-gray-50 dark:bg-zinc-800/50 rounded-lg p-6 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-zinc-700"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-medium text-gray-500 dark:text-gray-500 font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-full" aria-label="View Source">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
