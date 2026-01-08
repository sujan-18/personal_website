import React, { useEffect, useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';
import axios from 'axios';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/projects/');
                setProjects(res.data);
            } catch (error) {
                console.error("Failed to fetch projects", error);
                // Fallback or empty state
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-white">Loading incredible projects...</div>;
    }

    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                {projects.length === 0 ? (
                    <div className="text-center text-gray-400">No projects added yet from the secret backend headquarters.</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                            >
                                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <Code size={64} className="text-white opacity-50" />
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech_stack.split(',').map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-300 border border-purple-500/30"
                                            >
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                                        >
                                            View Project <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
