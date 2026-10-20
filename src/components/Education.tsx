import { useApp } from '../context';
import { links } from '../content';
import SectionHead from './SectionHead';

export default function Education() {
  const { t } = useApp();
  const ed = t.education;
  return (
    <section id="formacion" className="section">
      <div className="container">
        <SectionHead eyebrow={ed.eyebrow} title={ed.title} />
        <div className="schools">
          {ed.schools.map((s) => (
            <article key={s.name} className="card school" data-reveal>
              <div className="school__logo">
                <img src={s.logo} alt="" loading="lazy" />
              </div>
              <h3 className="school__name">{s.name}</h3>
              <span className="label">{s.meta}</span>
              <span className="school__score">{s.score}</span>
              <p className="school__desc">{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="wins">
          {ed.wins.map((w) => (
            <div key={w.k} className={`card win win--${w.tone}`} data-reveal>
              <span className="label">{w.k}</span>
              <span className="win__v">{w.v}</span>
            </div>
          ))}
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="card win win--more" data-reveal>
            <span className="label">{ed.more.k}</span>
            <span className="win__v">{ed.more.v}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
