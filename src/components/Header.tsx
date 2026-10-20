import { useEffect, useState } from 'react';
import { useApp } from '../context';
import { links } from '../content';

const SECTIONS = ['about', 'myfix', 'experience', 'projects', 'education', 'contact'] as const;
const IDS: Record<(typeof SECTIONS)[number], string> = {
  about: 'sobre-mi',
  myfix: 'myfix',
  experience: 'experiencia',
  projects: 'proyectos',
  education: 'formacion',
  contact: 'contacto',
};

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = Object.values(IDS)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled || open ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__ring">AV</span>
          <span className="brand__name">
            ABEL<span className="accent">/</span>VALLE
          </span>
        </a>

        <nav aria-label="Principal" className={`nav ${open ? 'nav--open' : ''}`} id="main-nav">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${IDS[s]}`}
              className={`nav__link ${active === IDS[s] ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              /{t.nav[s]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <div className="lang" role="group" aria-label={t.nav.language}>
            {(['es', 'en'] as const).map((l) => (
              <button
                key={l}
                type="button"
                className={`lang__btn ${lang === l ? 'is-active' : ''}`}
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
            title={theme === 'dark' ? t.nav.themeToLight : t.nav.themeToDark}
          >
            {theme === 'dark' ? (
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <a href={links.cv} download className="btn btn-primary header__cv">
            {t.nav.cv} ↓
          </a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger ${open ? 'burger--x' : ''}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
