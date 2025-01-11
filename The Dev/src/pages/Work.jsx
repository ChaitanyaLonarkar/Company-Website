import Marquee from "react-fast-marquee";
import './css/Work.css';

const projects = [
  {
    id: 1,
    imageUrl: 'hero-left.jpg',
    title: 'Project Traffic Light',
    tags: ['mobile app', 'design', 'social'],
  },
  {
    id: 2,
    imageUrl: 'hero-left.jpg',
    title: 'Project Traffic Light',
    tags: ['mobile app', 'design', 'social'],
  },
  {
    id: 3,
    imageUrl: 'hero-left.jpg',
    title: 'Project Traffic Light',
    tags: ['mobile app', 'design', 'social'],
  },
  {
    id: 4,
    imageUrl: 'hero-left.jpg',
    title: 'Project Traffic Light',
    tags: ['mobile app', 'design', 'social'],
  },
  {
    id: 5,
    imageUrl: 'hero-right.jpg',
    title: 'Project Traffic Light',
    tags: ['mobile app', 'design', 'social'],
  },
  {
    id: 6,
    imageUrl: 'hero-right.jpg',
    title: 'Project Traffic Light',
    tags: ['mobile app', 'design', 'social'],
  },
];
const logos = [
  'dribbe-icon.svg',
  'dribbe-icon.svg',
  'dribbe-icon.svg',
  'dribbe-icon.svg',
  'dribbe-icon.svg',
  'dribbe-icon.svg',
  'dribbe-icon.svg',
  
];

const Work = () => {
  

  return (
    <section>
      <div className='work-hero'>
        <h1 id='hero-title'>OUR WORK</h1>
        
        <Marquee autoFill='true'>
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} className="logo" alt={`Logo ${index}`} />
          ))}
        </Marquee>
      </div>

      <div className='our-work-container'>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" >
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
};

export default Work;