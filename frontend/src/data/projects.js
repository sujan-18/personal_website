import applyWiseImage from '../images/project1.png';
import portfolioImage from '../images/projectpic1.png';
import galleryImage from '../images/projectpic2.png';
import projectIdeasImage from '../images/projectpic3.png';
import projectLibreImage from '../images/projectpic4.png';

export const projects = [
  {
    title: 'ApplyWise',
    description: 'An internship application tracker for managing applications, statuses, notes, search, and filters, with private user accounts and application editing.',
    techStack: ['FastAPI', 'Python', 'HTML', 'Tailwind CSS', 'PostgreSQL'],
    href: 'https://github.com/sujan-18/ApplyWise/',
    linkLabel: 'View on GitHub',
    image: applyWiseImage,
    // Add imported screenshots here to create more overlapping image cards.
    galleryImages: [{ src: applyWiseImage, alt: 'ApplyWise application screenshot' }],
  },
  {
    title: 'Portfolio',
    description: 'My first portfolio website, built with HTML and CSS.',
    techStack: ['HTML', 'CSS'],
    href: 'https://sujan-18.github.io/My_portfolio_website/',
    linkLabel: 'View live project',
    image: portfolioImage,
    galleryImages: [{ src: portfolioImage, alt: 'Project planning workspace' }, { src: galleryImage, alt: 'Team collaboration around a project' }],
  },
  {
    title: 'Gallery',
    description: 'A mini photo gallery made with HTML, CSS, and JavaScript. It includes clickable thumbnails, a dark mode toggle for the large image, and dynamic DOM rendering. Still a work in progress.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://sujan-18.github.io/my_galary/',
    linkLabel: 'View live project',
    image: galleryImage,
    galleryImages: [{ src: projectIdeasImage, alt: 'Creative project ideas' }, { src: projectLibreImage, alt: 'ProjectLibre AI Copilot project planning interface' }],
  },
];
