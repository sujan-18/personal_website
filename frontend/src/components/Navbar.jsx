import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        SUJAN
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'projects', 'contact'].map(section => (
                            <button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`capitalize transition-all ${activeSection === section
                                    ? 'text-purple-400 font-semibold'
                                    : 'text-gray-300 hover:text-purple-300'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {
                menuOpen && (
                    <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
                        {['home', 'about', 'projects', 'contact'].map(section => (
                            <button
                                key={section}
                                onClick={() => {
                                    setActiveSection(section);
                                    setMenuOpen(false);
                                }}
                                className="block w-full text-left px-4 py-3 capitalize hover:bg-slate-700 transition-colors"
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                )
            }
        </nav >
    );
}
