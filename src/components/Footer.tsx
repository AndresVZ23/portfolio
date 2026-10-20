import { useApp } from '../context';
import { links } from '../content';

export default function Footer() {
  const { t } = useApp();
  const f = t.footer;
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <svg className="footer__rings" viewBox="0 0 420 420" aria-hidden="true">
        <circle className="spin" cx="210" cy="210" r="200" fill="none" strokeWidth="1.5" strokeDasharray="4 10" />
        <circle className="spin-rev" cx="210" cy="210" r="170" fill="none" strokeWidth="2" strokeDasharray="100 40 30 40" />
      </svg>
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="footer__name">
            Abel<span className="accent">/</span>Valle
          </span>
          <span className="label">{f.role}</span>
          <p>{f.tagline}</p>
        </div>
        <nav className="footer__col" aria-label={f.nav}>
          <span className="label">{f.nav}</span>
          <a href="#sobre-mi">/{t.nav.about}</a>
          <a href="#myfix">/{t.nav.myfix}</a>
          <a href="#experiencia">/{t.nav.experience}</a>
          <a href="#proyectos">/{t.nav.projects}</a>
          <a href="#formacion">/{t.nav.education}</a>
        </nav>
        <div className="footer__col">
          <span className="label">{f.connect}</span>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={`mailto:${links.email}`}>{links.email}</a>
          <a href={links.cv} download>
            {f.cv}
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>
          © {year} Abel Andrés Valle Zuta · {f.rights}
        </span>
        <a href="#inicio" className="footer__top-btn">
          {f.top}
        </a>
      </div>
    </footer>
  );
}
