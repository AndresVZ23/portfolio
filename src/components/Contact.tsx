import { useState, type FormEvent } from 'react';
import { useApp } from '../context';
import { links } from '../content';
import SectionHead from './SectionHead';

type Status = 'idle' | 'sending' | 'ok' | 'error' | 'inactive';

// FormSubmit envía cada mensaje directo a tu correo, sin cuentas ni claves.
// La primera vez llega un correo de activación ("Activate Form") que hay que aceptar una sola vez
// por cada dominio (localhost, vercel.app, dominio propio).
// Se envía desde el navegador porque FormSubmit está detrás de Cloudflare y bloquea servidores.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || `https://formsubmit.co/ajax/${links.email}`;

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get('_honey') ?? '')) return; // bot
    const subject = String(data.get('subject') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Portafolio · ${subject}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: email,
          Asunto: subject,
          Correo: email,
          Mensaje: message,
        }),
      });
      const payload = (await res.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
      const ok = payload?.success === true || payload?.success === 'true';
      if (res.ok && ok) {
        setStatus('ok');
        form.reset();
        return;
      }
      // Nunca fingimos éxito: distinguimos "falta activar" de un error genérico.
      setStatus(/activat/i.test(payload?.message ?? '') ? 'inactive' : 'error');
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
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />
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
            {status === 'inactive' && c.inactive}
          </p>
        </form>
      </div>
    </section>
  );
}
