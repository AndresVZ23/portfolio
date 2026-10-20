import { useEffect, useState } from 'react';
import { useApp } from '../context';

const KEY = 'av-booted';

function alreadyBooted(): boolean {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

/** Secuencia de arranque tipo HUD: se muestra una vez por sesión y se puede saltar. */
export default function BootSequence() {
  const { t } = useApp();
  const [show, setShow] = useState(() => {
    if (alreadyBooted()) return false;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = 'hidden';
    const timers = t.boot.lines.map((_, i) => window.setTimeout(() => setStep(i + 1), 380 + i * 420));
    const end = window.setTimeout(() => finish(), 380 + t.boot.lines.length * 420 + 450);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
      document.body.style.overflow = '';
    };
  }, [show]);

  function finish() {
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* ignorar */
    }
    setLeaving(true);
    window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = '';
    }, 600);
  }

  if (!show) return null;
  const progress = Math.round((step / t.boot.lines.length) * 100);

  return (
    <div className={`boot ${leaving ? 'boot--leaving' : ''}`} role="presentation">
      <div className="boot__core">
        <svg viewBox="0 0 220 220" className="boot__rings" aria-hidden="true">
          <circle className="spin" cx="110" cy="110" r="104" fill="none" stroke="#F2B544" strokeWidth="1.5" strokeDasharray="3 9" />
          <circle className="spin-rev" cx="110" cy="110" r="88" fill="none" stroke="#E0322B" strokeWidth="3" strokeDasharray="90 30 20 30" />
          <circle cx="110" cy="110" r="70" fill="none" stroke="#F2B544" strokeOpacity="0.35" />
        </svg>
        <span className="boot__mono">AV</span>
      </div>
      <ul className="boot__lines" aria-live="polite">
        {t.boot.lines.map((line, i) => (
          <li key={line} className={i < step ? 'is-on' : ''}>
            <span className="boot__ok">{i < step ? (i === t.boot.lines.length - 1 ? '✓' : 'OK') : '··'}</span> {line}
          </li>
        ))}
      </ul>
      <div className="boot__bar" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <button type="button" className="boot__skip" onClick={finish}>
        {t.boot.skip} →
      </button>
    </div>
  );
}
