import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { ExpandableCard } from "../components/ui/expandable-card";
import nutriscanImg from "../assets/images/nutriscan.png";
import perpustakaanImg from "../assets/images/perpustakaan.png";
import filterWilayahImg from "../assets/images/filter-wilayah.png";
import streamflixImg from "../assets/images/StreamFlix.png";
import portofolioImg from "../assets/images/portfolio.png";


const Projects = () => {
    const projects = [
        {
            title: "NutriScan (Bangkit Capstone)",
            description: "Overview\nThe Fruit Identification and Calorie Estimation System is a mobile application designed to help users identify fruits and estimate their caloric content using image analysis. Leveraging advanced machine learning technologies like Convolutional Neural Networks (CNN) and cloud-based infrastructure, this app offers a seamless and accurate way to track dietary information and promote healthier eating habits.\n\nFeatures\nFruit Recognition: Identify a wide variety of fruits through the camera or image upload.\nCaloric Estimation: Estimate caloric content based on the type and quantity of the fruit.\nCloud Integration: Efficiently process and store data using Google Cloud Platform (GCP).\nUser-Friendly Interface: Simple and intuitive app design for ease of use.\nMobile Accessibility: Native Android app built with Kotlin.\nHow It Works\nImage Input: Users upload an image of a fruit or take a photo directly within the app.\nFruit Recognition: The app utilizes a CNN model to classify the fruit based on features like shape, color, and texture.\nCalorie Estimation: The app retrieves the caloric value of the identified fruit using preloaded nutritional data.\nResults Display: Nutritional information, including calories, is displayed to the user.\nTechnology Stack\nMachine Learning\nTools/IDEs: Google Colab, Jupyter Notebook\nLibraries: TensorFlow, Keras, OpenCV, NumPy, Pandas, Matplotlib\nFrameworks: Convolutional Neural Networks (CNN)\nCloud Services\nPlatform: Google Cloud Platform (GCP)\nTechnologies: Firebase, Cloud Functions, Google Cloud Storage\nMobile Development\nTools/IDEs: Android Studio, Figma\nLibraries: Retrofit\nLanguages: Kotlin",
            tech: ["Kotlin", "MVVM", "TensorFlow Lite", "Retrofit"],
            github: "https://github.com/Capstone-product/NutriScan.git",
            demo: "#",
            image: nutriscanImg
        },
        {
            title: "Univ. Bakrie Library App",
            description: "📚 Smart Library App (SLiMS Integrated)\nSmart Library adalah aplikasi perpustakaan mobile berbasis Android yang terintegrasi secara real-time dengan sistem manajemen perpustakaan SLiMS 9 Bulian (Senayan Library Management System).\n\nAplikasi ini dirancang untuk memudahkan mahasiswa dan dosen dalam mencari, meminjam, dan membaca buku (fisik maupun digital) dengan fitur manajemen stok cerdas dan keamanan konten digital.\n\n✨ Fitur Utama\n\n🔐 Otentikasi & Profil\nLogin Member: Terintegrasi dengan database anggota SLiMS (ID & Password).\nEdit Profil: Mengubah nama, email, dan foto profil yang langsung tersinkronisasi ke server.\n\nAuto-Logout: Fitur keamanan yang otomatis mengeluarkan akun jika tidak aktif selama periode tertentu.\n\n📖 Manajemen Koleksi & E-Book\nKatalog Buku: Menampilkan koleksi buku terbaru dengan status ketersediaan real-time.\nPencarian Cerdas: Mencari buku berdasarkan judul atau pengarang.\nSmart Availability Logic:\nJika stok tersedia: Tombol Pinjam Buku.\nJika stok habis: Tombol otomatis berubah menjadi Masuk Antrian.\n\nSecure E-Book Reader:\nMembaca PDF langsung di dalam aplikasi (Internal Viewer).\n\nWatermark Dinamis: Overlay tulisan Milik Universitas di atas PDF untuk mencegah pembajakan/screenshot.\n\nAnti-Download: File PDF tidak bisa diunduh ke penyimpanan lokal perangkat.\n\n🔄 Sirkulasi & Transaksi\nPeminjaman Mandiri: Proses peminjaman buku fisik dan digital melalui aplikasi.\n\nSistem Antrian (Queue): Masuk ke daftar tunggu (waiting list) jika buku sedang dipinjam semua.\n\nPengembalian Buku: Fitur untuk mengembalikan buku digital/fisik.\n\nRiwayat: Melihat histori peminjaman yang sudah selesai/dikembalikan.\n\n🔔 Notifikasi & UX\nPengingat Jatuh Tempo: Notifikasi otomatis H-1 sebelum tanggal pengembalian (menggunakan WorkManager).\n\nDark Mode: Dukungan tema gelap untuk kenyamanan mata.\n\nMulti-Bahasa: Mendukung Bahasa Indonesia dan Inggris.\n\nBookmark: Menyimpan buku favorit ke daftar pribadi.\n\n🛠️ Teknologi yang Digunakan\nMobile (Android)\nBahasa: Kotlin\nArsitektur: MVVM (Model-View-ViewModel) + Repository Pattern\nUI Toolkit: XML Layout, Material Design Components\nNetworking: Retrofit2 + Gson\nConcurrency: Coroutines & Flow\nImage Loading: Glide & Coil\nPDF Engine: AndroidPdfViewer\nBackground Task: WorkManager (untuk notifikasi)\nLocal Storage: SharedPreferences (Session Management)\nBackend (API)\nBahasa: PHP (Native/Vanilla)\nDatabase: MySQL (Database SLiMS 9)\nRespon: JSON Format",
            tech: ["Kotlin", "MySQL", "Material Design", "MVVM"],
            github: "https://github.com/ilhamrachmadhani/Aplikasi-Perpustakaan-Smart-Library-.git",
            demo: "#",
            image: perpustakaanImg
        },
        {
            title: "Website Filter Wilayah",
            description: "Filter Wilayah Indonesia adalah aplikasi web yang memungkinkan pengguna menyaring data wilayah secara bertingkat mulai dari Provinsi, Kota/Kabupaten, hingga Kecamatan. Aplikasi ini dirancang dengan sistem filter dinamis dan pengelolaan state yang konsisten agar tetap stabil saat halaman di-refresh. Fokus utama pengembangan berada pada pengalaman pengguna yang bersih, responsif, dan terstruktur.",
            tech: ["HTML", "CSS", "ReactJS",],
            github: "https://github.com/ilhamrachmadhani/filter-wilayah",
            demo: "https://filterwilayah.netlify.app/",
            image: filterWilayahImg
        },
        {
            title: "Website Film StreamFlix",
            description: "Sebuah aplikasi pencarian film berbasis web yang responsif, dibangun menggunakan React.js dan Vite. Aplikasi ini memanfaatkan OMDb API untuk menampilkan daftar film berdasarkan kata kunci pencarian dan menyajikan detail komprehensif untuk setiap film.✨ Fitur Utama Pencarian Real-time: Mencari judul film secara dinamis menggunakan OMDb API. Tampilan Detail Film: Menampilkan pop-up (modal) berisi informasi lengkap film (sinopsis, rating IMDb, sutradara, aktor, genre, dll). Desain Responsif: Antarmuka yang dioptimalkan untuk perangkat mobile, tablet, maupun desktop menggunakan Tailwind CSS. State Management & Error Handling: Menangani status loading dan memberikan umpan balik visual jika film tidak ditemukan atau terjadi kesalahan jaringan. Keamanan Kredensial: Menggunakan Environment Variables (.env) untuk mengamankan API Key.🛠️ Teknologi yang Digunakan React 18: Library utama untuk membangun antarmuka pengguna berbasis komponen (Functional Components & Hooks). Vite: Build tool modern yang memberikan pengalaman pengembangan super cepat. Tailwind CSS: Utility-first CSS framework untuk proses styling yang cepat dan konsisten. OMDb API: RESTful API pihak ketiga untuk mengambil data dan poster film.",
            tech: ["HTML", "CSS", "ReactJS",],
            github: "https://github.com/ilhamrachmadhani/StreamFlix",
            demo: "https://streamflixid.netlify.app/",
            image: streamflixImg
        },
        {
            title: "Website Portfolio Pribadi",
            description: "Selamat datang di repositori Portofolio 2026 saya! 🚀 Saya adalah seorang Software Engineer lulusan Sistem Informasi dengan minat mendalam pada pengembangan aplikasi mobile dan antarmuka web (Frontend). Saya senang memecahkan masalah kompleks melalui kode yang bersih, efisien, dan arsitektur yang terukur. Repositori ini berisi kumpulan proyek, eksplorasi teknologi, dan showcase dari perjalanan saya dalam dunia rekayasa perangkat lunak.",
            tech: ["HTML", "CSS", "ReactJS",],
            github: "https://github.com/ilhamrachmadhani/portofolio2026",
            demo: "#",
            image: portofolioImg
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

                <div className="md:col-span-8 grid grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <ExpandableCard
                            key={index}
                            title={project.title}
                            src={project.image}
                            description={project.tech.join(" • ")}
                        >
                            <div className="flex flex-col gap-4 ">
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4 mt-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                        <Github className="w-4 h-4" /> Repository
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Demo
                                    </a>
                                </div>
                            </div>
                        </ExpandableCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
