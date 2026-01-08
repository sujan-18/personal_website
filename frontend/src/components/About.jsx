import React from 'react';
import { Code, Zap, Palette } from 'lucide-react';

export default function About() {
    const skills = [
        { icon: Code, name: 'Frontend', items: ['React', 'Vue', 'TypeScript', 'Tailwind CSS'] },
        { icon: Zap, name: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI'] },
        { icon: Palette, name: 'Other', items: ['MongoDB', 'PostgreSQL', 'AWS', 'Docker'] }
    ];

    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-purple-500/20">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        I'm a passionate full-stack developer with over 5 years of experience building scalable web applications.
                        I specialize in creating elegant solutions to complex problems, with a focus on user experience and performance.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                        or sharing knowledge with the developer community through blog posts and talks.
                    </p>
                </div>

                <h3 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <skill.icon className="text-purple-400" size={28} />
                                <h4 className="text-xl font-semibold">{skill.name}</h4>
                            </div>
                            <ul className="space-y-2">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="text-gray-400 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
