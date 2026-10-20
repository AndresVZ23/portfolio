import { useApp } from '../context';
import SectionHead from './SectionHead';

export default function Experience() {
  const { t } = useApp();
  const e = t.experience;
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <SectionHead eyebrow={e.eyebrow} title={e.title} />
        <ol className="timeline">
          {e.jobs.map((job) => (
            <li key={job.role + job.dates} className="timeline__item" data-reveal>
              <span className={`timeline__node ${job.current ? 'is-current' : ''}`} aria-hidden="true" />
              <article className="card job">
                <div className="job__logo">
                  <img src={job.logo} alt="" loading="lazy" />
                </div>
                <div className="job__body">
                  <header className="job__head">
                    <h3 className="job__role">{job.role}</h3>
                    <span className="job__dates mono">{job.dates}</span>
                  </header>
                  <a href={job.href} target="_blank" rel="noreferrer" className="job__company">
                    {job.company} ↗
                  </a>
                  <ul className="job__points">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {job.tags.map((tg) => (
                      <span key={tg} className="tag">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
