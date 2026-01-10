import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer({ setActiveSection }) {
    return (
        <footer className="bg-slate-900 border-t border-purple-500/20 mt-20 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            SUJAN
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building digital experiences that make a difference. Let's create something amazing together.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {['home', 'about', 'projects', 'contact'].map(section => (
                                <li key={section}>
                                    <button
                                        onClick={() => setActiveSection(section)}
                                        className="text-gray-400 hover:text-purple-400 transition-colors capitalize text-sm"
                                    >
                                        {section}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-400">Web Development</li>
                            <li className="text-gray-400">UI/UX Design</li>
                            <li className="text-gray-400">Projects Management</li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="text-gray-400">Email: newarsujan2323@gmail.com</li>
                            <li className="text-gray-400">Phone: +977 9767581384</li>
                            <li className="text-gray-400">Location: Kathmandu, Nepal</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-purple-500/20 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/sujanshresthaa__18/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" aria-label="Twitter/X">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/sujan-shrestha-841753359/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/sujan-18" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>

                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Sujan. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
