import { useApp } from '../context';
import { projectSlides } from '../content';
import Carousel from './Carousel';
import SectionHead from './SectionHead';

export default function Projects() {
  const { t } = useApp();
  const p = t.projects;
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <SectionHead eyebrow={p.eyebrow} title={p.title} />
        <div className="projects">
          {p.items.map((item, i) => (
            <article key={item.name} className="card project" data-reveal>
              <Carousel slides={projectSlides(t, i)} height={300} />
              <div className="project__body">
                <span className="label">{item.kicker}</span>
                <h3 className="project__name">{item.name}</h3>
                <p className="project__desc">{item.desc}</p>
                <div className="tags">
                  {item.tags.map((tg) => (
                    <span key={tg} className="tag">
                      {tg}
                    </span>
                  ))}
                </div>
                <a href={item.href} target="_blank" rel="noreferrer" className="link-arrow project__cta">
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
