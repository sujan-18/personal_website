import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const whatsappUrl = 'https://wa.me/9779767581384?text=Hello%20Sujan';

export default function Contact() {
  return <section className="contact" id="contact">
    <div className="page-shell contact__grid">
      <div className="section-heading reveal">
        <p className="eyebrow">Start a conversation</p>
        <h2>Let’s make<br/><em>something matter.</em></h2>
        <p className="contact__intro">Have an idea, a question, or a trail recommendation? I’d be glad to hear from you.</p>
      </div>
      <div className="contact__actions reveal" aria-label="Contact Sujan">
        <a className="button button--outline" href="mailto:newarsujan2323@gmail.com"><Mail size={15}/> Email Sujan</a>
        <a className="button button--outline" href="https://www.instagram.com/agentic_sujan/" target="_blank" rel="noreferrer"><Instagram size={15}/> Instagram</a>
        <a className="button button--outline" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon size={16}/> WhatsApp · 9767581384</a>
        <a className="button button--outline" href="https://www.linkedin.com/in/sujan-shrestha-841753359/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={15}/><ArrowUpRight size={13}/></a>
        <p>Choose the channel that works best for you.</p>
      </div>
    </div>
  </section>;
}
