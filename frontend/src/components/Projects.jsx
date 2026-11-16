import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const showcaseImages = projects.flatMap((project) => (project.galleryImages || []).map((image) => ({ ...image, title: image.title || project.title }))); 

export default function Projects() {
  return <section className="section projects" id="projects"><div className="page-shell">
    <div className="projects__heading reveal">
      <div>
        <p className="eyebrow"><span/> My Projects</p>
        <h2>Turning Ideas into Reality</h2>
        <p className="section-intro">A collection of projects where I turn creative ideas<br className="desktop-break"/> into functional, user-friendly solutions.</p>
        <a className="button button--outline" href="#projects-list">Explore All Projects <ArrowRight size={14}/></a>
      </div>
      <div className="project-visual" aria-label="Selected project screenshots">
        {showcaseImages.map((image, index) => <figure className="project-preview" key={`${image.title}-${index}`} style={{ '--preview-left': `${showcaseImages.length <= 1 ? 27 : (index / (showcaseImages.length - 1)) * 52}%`, '--preview-tilt': `${(index % 3 - 1) * 5}deg`, zIndex: index + 1 }}>
          <img src={image.src} alt={image.alt || `${image.title} screenshot`} loading="lazy" decoding="async" />
          <figcaption>{image.alt || image.title}</figcaption>
        </figure>)}
      </div>
    </div>
    <div className="project-list" id="projects-list">
      {projects.map((project, index) => <article className="project-card reveal" key={project.title}>
        <span className="project-card__number">0{index + 1}</span>
        <a className="project-card__thumb" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
        </a>
        <div>
          <h3>{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
          <div className="project-card__tags">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </div>
        <a className="project-card__link" href={project.href} target="_blank" rel="noreferrer">
          {project.linkLabel || 'View project'} <ArrowUpRight size={14}/>
        </a>
      </article>)}
    </div>
  </div></section>;
}
