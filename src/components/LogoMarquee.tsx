import { useApp } from '../context';
import { logos } from '../content';

// Cada grupo repite los logos varias veces para que siempre sea más ancho que la pantalla;
// la pista tiene dos grupos idénticos y se desplaza exactamente uno => bucle continuo sin vacíos.
const REPEAT = 4;

export default function LogoMarquee() {
  const { t } = useApp();
  const group = Array.from({ length: REPEAT }, () => logos).flat();

  return (
    <section className="marquee" aria-label={t.marquee.replace('//', '').trim()}>
      <p className="container label marquee__label">{t.marquee}</p>
      <ul className="sr-only">
        {logos.map((l) => (
          <li key={l.alt}>{l.alt}</li>
        ))}
      </ul>
      <div className="marquee__viewport" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((g) => (
            <ul key={g} className="marquee__group">
              {group.map((l, i) => (
                <li key={i} className="marquee__tile">
                  <img src={l.src} alt="" style={{ height: l.h }} loading="lazy" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
