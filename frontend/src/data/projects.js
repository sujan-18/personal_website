import applyWiseImage from '../images/project1.png';

export const projects = [
  {
    title: 'ApplyWise',
    description: 'An internship application tracker for managing applications, statuses, notes, search, and filters, with private user accounts and application editing.',
    techStack: ['FastAPI', 'Python', 'HTML', 'Tailwind CSS', 'PostgreSQL'],
    href: 'https://github.com/sujan-18/ApplyWise/',
    linkLabel: 'View on GitHub',
    image: applyWiseImage,
  },
  {
    title: 'Portfolio',
    description: 'My first portfolio website, built with HTML and CSS.',
    techStack: ['HTML', 'CSS'],
    href: 'https://sujan-18.github.io/My_portfolio_website/',
    linkLabel: 'View live project',
    image: '/assets/images/projects/portfolio.png',
  },
  {
    title: 'Gallery',
    description: 'A mini photo gallery made with HTML, CSS, and JavaScript. It includes clickable thumbnails, a dark mode toggle for the large image, and dynamic DOM rendering. Still a work in progress.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://sujan-18.github.io/my_galary/',
    linkLabel: 'View live project',
    image: '/assets/images/projects/gallery.png',
  },
];
