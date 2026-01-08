import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-16">
        {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact setActiveSection={setActiveSection} />}
      </main>

      <Footer setActiveSection={setActiveSection} />
      <Chatbot />
    </div>
  );
}
