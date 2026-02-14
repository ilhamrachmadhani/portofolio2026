import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        © {new Date().getFullYear()} Ilham Rachmadhani. All rights reserved 2026
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <a href="https://github.com/ilhamrachmadhani" className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/ilham-rachmadhani" className="text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
