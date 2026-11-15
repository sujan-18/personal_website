import { createElement } from 'react';
import { BookOpen, Code2, Leaf, Mountain } from 'lucide-react';
import profileImage from '../images/profile.png';

const identities = [
  { icon: Code2, title: 'Developer', line: 'Build. Innovate. Repeat.' },
  { icon: Mountain, title: 'Trekker', line: 'Explore. Discover. Live.' },
  { icon: Leaf, title: 'Nature Lover', line: 'Breathe. Appreciate.' },
  { icon: BookOpen, title: 'Lifelong Learner', line: 'Always Keep Growing.' },
];

export default function About() {
  return <section className="section about" id="about">
    <div className="page-shell about__grid">
      <div className="about__photo reveal">
        <div className="photo-placeholder">
          <div className="photo-placeholder__frame">
            <img className="about__portrait" src={profileImage} alt="Sujan Shrestha" loading="lazy" decoding="async" width="1024" height="1536" />
          </div>
        </div>
      </div>
      <div className="about__copy reveal">
        <p className="eyebrow"><span /> About Me</p>
        <h2>Two Worlds,<br /><em>One Passion.</em></h2>
        <p>I’m a software developer with an explorer’s mindset. I love turning ideas into functional digital experiences, just as much as I enjoy discovering new places, walking mountain trails, and experiencing the beauty of nature.</p>
        <a className="button button--outline" href="#projects">Learn More <ArrowRightIcon /></a>
      </div>
      <div className="about__identities reveal">
        {identities.map(({ icon, title, line }) => <div className="identity-row" key={title}>
          {createElement(icon, { size: 25 })}
          <div><h3>{title}</h3><p>{line}</p></div>
        </div>)}
      </div>
    </div>
  </section>;
}

function ArrowRightIcon() { return <span aria-hidden="true">→</span>; }
