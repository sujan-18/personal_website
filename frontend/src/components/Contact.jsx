import React, { useState } from 'react';
import axios from 'axios';

export default function Contact({ setActiveSection }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        try {
            setStatus('sending');
            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact/`, formData);
            alert(`Thank you ${formData.name}! Your message has been received.`);
            setFormData({ name: '', email: '', message: '' });
            setStatus('success');
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-300">
                                Message
                            </label>
                            <textarea
                                rows={6}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={status === 'sending'}
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 disabled:opacity-50"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button
                        onClick={() => setActiveSection('home')}
                        className="px-6 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 transition-all transform hover:scale-105 inline-flex items-center gap-2"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </section>
    );
}
