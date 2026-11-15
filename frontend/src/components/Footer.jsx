import { ArrowRight, Github, Instagram, Linkedin, Mail, Mountain } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const links = [['home','Home'],['about','About'],['adventures','Adventures'],['projects','Projects'],['contact','Contact']];
const whatsappUrl = 'https://wa.me/9779767581384?text=Hello%20Sujan';

export default function Footer({ onNavigate }) {
  return <footer className="site-footer"><div className="page-shell">
    <div className="footer__top">
      <a className="brand" href="#home" onClick={() => onNavigate('home')}><span className="brand__icon"><Mountain size={29}/><i/></span><span>Sujan <b>Shrestha</b><small>Developer · Trekker · Dreamer</small></span></a>
      <nav className="footer__links" aria-label="Footer navigation">{links.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => onNavigate(id)}>{label}</a>)}</nav>
      <a href="#contact" className="button button--outline" onClick={() => onNavigate('contact')}>Let’s Connect <ArrowRight size={14}/></a>
      <div className="footer__socials">
        <a href="https://github.com/sujan-18/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
        <a href="https://www.linkedin.com/in/sujan-shrestha-841753359/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
        <a href="https://www.instagram.com/agentic_sujan/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp 9767581384"><WhatsAppIcon size={16}/></a>
        <a href="mailto:newarsujan2323@gmail.com" aria-label="Email Sujan"><Mail/></a>
      </div>
    </div>
    <div className="footer__bottom"><span>© {new Date().getFullYear()} Sujan Shrestha. All rights reserved.</span><span>KEEP EXPLORING <i/> KEEP CODING <Mountain size={17}/></span></div>
  </div></footer>;
}
