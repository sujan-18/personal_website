import React, { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import axios from 'axios';

export default function Hero({ setActiveSection }) {
    const [cvUrl, setCvUrl] = useState(null);

    useEffect(() => {
        const fetchCv = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/cv/');
                if (res.data && res.data.length > 0) {
                    // Determine latest active CV, or just take the first one returned
                    setCvUrl(res.data[0].file);
                }
            } catch (error) {
                console.error("No active CV found");
            }
        };
        fetchCv();
    }, [])

    const handleDownloadCV = () => {
        if (cvUrl) {
            window.open(cvUrl, '_blank');
        } else {
            alert("No CV is currently available for download. Please contact me directly!");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto">
                <div className="relative inline-block mb-8 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-6xl font-bold">
                            SS
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    Sujan Shrestha
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                    Full Stack Developer & Creative Problem Solver
                </p>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    Crafting beautiful, functional web experiences with modern technologies and innovative solutions
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => setActiveSection('projects')}
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => setActiveSection('contact')}
                        className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-all transform hover:scale-105"
                    >
                        Get In Touch
                    </button>
                    {cvUrl && (
                        <button
                            onClick={handleDownloadCV}
                            className="px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download CV
                        </button>
                    )}
                </div>

                <div className="flex justify-center gap-6 mt-12">
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                        <Github size={28} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                        <Linkedin size={28} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                        <Mail size={28} />
                    </a>
                </div>
            </div>
        </section>
    );
}
