import { useApp } from '../context';
import SectionHead from './SectionHead';

export default function About() {
  const { t } = useApp();
  const a = t.about;
  return (
    <section id="sobre-mi" className="section">
      <div className="container about">
        <div className="about__copy">
          <SectionHead eyebrow={a.eyebrow} title={a.title} />
          {a.paragraphs.map((p) => (
            <p key={p} className="about__p" data-reveal>
              {p}
            </p>
          ))}
          <p className="about__p about__closing" data-reveal>
            {a.closing}
          </p>
          <dl className="facts" data-reveal-group>
            {a.facts.map((f) => (
              <div key={f.k} className={`fact fact--${f.accent}`} data-reveal>
                <dt className="mono">{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="card stack" data-reveal>
          <span className="label">{a.stackTitle}</span>
          {a.stack.map((g) => (
            <div key={g.name} className="stack__group">
              <h3 className="stack__name">{g.name}</h3>
              <ul className="stack__items">
                {g.items.map((it) => (
                  <li key={it} className="stack__item">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
