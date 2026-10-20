import { useApp } from '../context';
import { photo } from '../content';
import NetworkCanvas from './NetworkCanvas';

export default function Hero() {
  const { t } = useApp();
  const [s1, s2, s3, s4] = t.hero.stats;

  return (
    <section id="inicio" className="hero">
      <NetworkCanvas />
      <svg className="hero__web" aria-hidden="true" viewBox="0 0 1440 1000" preserveAspectRatio="xMaxYMin slice">
        <g fill="none" strokeWidth="1">
          <path className="flow" d="M1440 0 L880 560" />
          <path className="flow" d="M1440 0 L1060 700" />
          <path className="flow" d="M1440 0 L700 220" />
          <path d="M1440 0 L1260 760 M1440 0 L760 420" />
          <path d="M1010 110 Q1190 180 1330 90 M890 290 Q1120 360 1340 230 M800 460 Q1090 540 1350 370" />
        </g>
      </svg>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__status" data-hero>
            <span className="pulse hero__dot" />
            {t.hero.status}
          </p>
          <h1 className="hero__title" data-hero>
            <span className="hero__line">Abel Andrés</span>
            <span className="hero__line accent">Valle Zuta</span>
          </h1>
          <div className="hero__roles" data-hero>
            <span className="role role--solid">{t.hero.roles[0]}</span>
            <span className="role role--gold">{t.hero.roles[1]}</span>
            <span className="role">{t.hero.roles[2]}</span>
          </div>
          <p className="hero__intro" data-hero>
            {t.hero.intro}
          </p>
          <div className="hero__cta" data-hero>
            <a href="#proyectos" className="btn btn-primary">
              {t.hero.ctaProjects}
            </a>
            <a href="#contacto" className="btn btn-link">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="hero__visual" data-hero>
          <div className="hud">
            <svg viewBox="0 0 460 460" className="hud__rings" aria-hidden="true">
              <circle className="spin hud__gold" cx="230" cy="230" r="220" fill="none" strokeWidth="1.5" strokeDasharray="4 10" />
              <circle className="spin-rev hud__red" cx="230" cy="230" r="198" fill="none" strokeWidth="3" strokeDasharray="120 40 30 40" />
              <circle className="hud__gold" cx="230" cy="230" r="176" fill="none" strokeOpacity="0.4" strokeWidth="1" />
              <g className="spin hud__gold-fill">
                <rect x="228" y="4" width="4" height="18" />
                <rect x="228" y="438" width="4" height="18" />
                <rect x="4" y="228" width="18" height="4" />
                <rect x="438" y="228" width="18" height="4" />
              </g>
            </svg>
            <div className="hud__photo">
              <img src={photo} alt="Abel Andrés Valle Zuta" width={680} height={680} fetchPriority="high" />
              <span className="hud-scan" aria-hidden="true" />
            </div>
            <div className="hud__chip hud__chip--tl">
              <span>{s1.k}</span>
              <strong className="gold">{s1.v}</strong>
            </div>
            <div className="hud__chip hud__chip--tr">
              <span>{s2.k}</span>
              <strong className="gold">{s2.v}</strong>
            </div>
            <div className="hud__chip hud__chip--bl hud__chip--red">
              <span>{s3.k}</span>
              <strong>{s3.v}</strong>
            </div>
            <div className="hud__chip hud__chip--br hud__chip--red">
              <span>{s4.k}</span>
              <strong>{s4.v}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
