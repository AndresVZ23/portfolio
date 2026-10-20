import { useApp } from '../context';
import { links, recognitionSlides } from '../content';
import myfixOnDark from '../assets/logos/myfix-on-dark.png';
import myfixOnLight from '../assets/logos/myfix-on-light.png';
import Carousel from './Carousel';
import SectionHead from './SectionHead';

export default function MyFix() {
  const { t, theme } = useApp();
  const m = t.myfix;
  return (
    <section id="myfix" className="section">
      <div className="container">
        <SectionHead eyebrow={m.eyebrow} title={m.title} keepLine />
        <div className="myfix">
          <div className="card myfix__info" data-reveal>
            <img src={theme === 'dark' ? myfixOnDark : myfixOnLight} alt="MyFix" className="myfix__logo" width={600} height={173} />
            <p className="myfix__desc">{m.description}</p>
            <div className="metrics">
              {m.metrics.map((x) => (
                <div key={x.label} className="metric">
                  <div className="metric__value">
                    <span data-count={x.value}>{x.value}</span>
                    {x.suffix}
                  </div>
                  <div className="metric__label">{x.label}</div>
                </div>
              ))}
            </div>
            <a href={links.myfix} target="_blank" rel="noreferrer" className="link-arrow">
              {m.cta}
            </a>
          </div>
          <div className="myfix__side" data-reveal>
            <div className="card myfix__carousel">
              <Carousel slides={recognitionSlides(t)} height={420} showCaption badge={m.badge} dark />
            </div>
            <div className="recognitions">
              {m.recognitions.map((r) => (
                <div key={r.k} className="card recognition">
                  <span className="label">{r.k}</span>
                  <p>{r.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
