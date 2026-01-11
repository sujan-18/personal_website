import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, MessageSquare, Send, X } from 'lucide-react';
import axios from 'axios';

export default function Chatbot() {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef(null);
    const chatEndRef = useRef(null);
    const synth = window.speechSynthesis;

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setChatInput(transcript);
                sendChatMessage(transcript);
                setIsListening(false);
            };

            recognitionRef.current.onerror = () => setIsListening(false);
            recognitionRef.current.onend = () => setIsListening(false);
        }
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    const toggleVoice = () => {
        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const speakResponse = (text) => {
        if (synth.speaking) {
            console.error('speechSynthesis.speaking');
            return;
        }

        if (text !== '') {
            const utterThis = new SpeechSynthesisUtterance(text);
            utterThis.onend = function (event) {
                console.log('SpeechSynthesisUtterance.onend');
            };
            utterThis.onerror = function (event) {
                console.error('SpeechSynthesisUtterance.onerror');
            };

            // Try to select a female voice
            const voices = synth.getVoices();
            const femaleVoice = voices.find(v =>
                (v.name.includes('Female') || v.name.includes('Google US English') || v.name.includes('Samantha'))
            );

            if (femaleVoice) {
                utterThis.voice = femaleVoice;
            }

            utterThis.pitch = 1;
            utterThis.rate = 1;
            synth.speak(utterThis);
        }
    };

    const sendChatMessage = async (manualInput = null) => {
        const messageToSend = manualInput || chatInput;
        if (!messageToSend.trim()) return;

        if (!manualInput) {
            setChatInput('');
        }

        const userMessage = { type: 'user', text: messageToSend };
        setChatMessages(prev => [...prev, userMessage]);

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat/`, { message: messageToSend });
            const botText = res.data.response;

            const botResponse = {
                type: 'bot',
                text: botText
            };
            setChatMessages(prev => [...prev, botResponse]);
            speakResponse(botText);

        } catch (error) {
            console.error("Chat error", error);
            const errorResponse = {
                type: 'bot',
                text: "Hello, I am Malla, Sujan's assistant. Currently, we are not connected to the backend, and this service will be updated soon."
            };
            setChatMessages(prev => [...prev, errorResponse]);
        }
    };

    return (
        <>
            <button
                onClick={() => setChatOpen(!chatOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all flex items-center justify-center z-40 transform hover:scale-110"
            >
                <MessageSquare size={28} className="text-white" />
            </button>

            {chatOpen && (
                <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-slate-800 rounded-2xl shadow-2xl border border-purple-500/30 flex flex-col z-40">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-t-2xl flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="font-semibold">Malla - Sujan Assistant</span>
                        </div>
                        <button onClick={() => setChatOpen(false)} className="hover:bg-white/20 rounded-full p-1">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {chatMessages.length === 0 && (
                            <div className="text-center text-gray-400 mt-8">
                                <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                                <p>Hi! I'm Malla. sujan Assistant! Ask me anything about the portfolio of sujan!</p>
                            </div>
                        )}
                        {chatMessages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-white ${msg.type === 'user'
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                                        : 'bg-slate-700'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="p-4 border-t border-slate-700">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-2 bg-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            />
                            <button
                                onClick={toggleVoice}
                                className={`p-2 rounded-full transition-colors text-white ${isListening
                                    ? 'bg-red-600 hover:bg-red-700'
                                    : 'bg-slate-700 hover:bg-slate-600'
                                    }`}
                            >
                                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                            </button>
                            <button
                                onClick={() => sendChatMessage()}
                                className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg transition-all text-white"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
