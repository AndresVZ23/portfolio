import { useState, type FormEvent } from 'react';
import { useApp } from '../context';
import { links } from '../content';
import SectionHead from './SectionHead';

type Status = 'idle' | 'sending' | 'ok' | 'error' | 'mailto';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get('subject') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    // Sin Formspree configurado: abrir el correo del visitante con todo prellenado.
    if (!FORMSPREE_ID) {
      const body = `${message}\n\n— ${email}`;
      window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ _subject: subject, subject, email, message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contacto" className="section section--last">
      <div className="container contact">
        <div className="contact__info">
          <SectionHead eyebrow={c.eyebrow} title={c.title} />
          <p className="contact__text" data-reveal>
            {c.text}
          </p>
          <ul className="contact__links" data-reveal>
            <li>
              <a href={`mailto:${links.email}`}>
                <span className="contact__icon">✉</span>
                {links.email}
              </a>
            </li>
            <li>
              <a href={links.whatsapp} target="_blank" rel="noreferrer">
                <span className="contact__icon">☏</span>
                {links.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <span className="contact__icon">in</span>/abel-andres-valle-zuta
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank" rel="noreferrer">
                <span className="contact__icon">gh</span>/AndresVZ23
              </a>
            </li>
          </ul>
        </div>

        <form className="card contact__form" onSubmit={onSubmit} data-reveal>
          <span className="label">{c.formTitle}</span>
          <label className="field">
            <span>{c.subject}</span>
            <input name="subject" type="text" required maxLength={150} />
          </label>
          <label className="field">
            <span>{c.email}</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="field">
            <span>{c.message}</span>
            <textarea name="message" rows={6} required maxLength={4000} />
          </label>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? c.sending : c.send}
          </button>
          <p className={`form-status form-status--${status}`} role="status" aria-live="polite">
            {status === 'ok' && c.ok}
            {status === 'error' && c.error}
            {status === 'mailto' && c.mailtoNote}
          </p>
        </form>
      </div>
    </section>
  );
}
