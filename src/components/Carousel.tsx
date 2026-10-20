import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { useApp } from '../context';
import type { Slide } from '../content';

interface Props {
  slides: Slide[];
  height?: number;
  showCaption?: boolean;
  badge?: string;
  dark?: boolean;
}

/** Carrusel con flechas, puntos, deslizamiento táctil y teclado (← →). */
export default function Carousel({ slides, height = 260, showCaption, badge, dark }: Props) {
  const { t } = useApp();
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const len = slides.length;

  useEffect(() => {
    if (index >= len) setIndex(0);
  }, [len, index]);

  const go = (n: number) => setIndex(((n % len) + len) % len);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(index + 1);
    }
  };

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
  };
  const onUp = (e: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
  };

  const current = slides[Math.min(index, len - 1)];

  return (
    <div className="carousel">
      <div
        className={`carousel__stage ${dark ? 'carousel__stage--dark' : ''}`}
        style={{ ['--h' as string]: `${height}px` }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={current?.caption ?? current?.alt}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={() => (startX.current = null)}
      >
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            draggable={false}
            className={`carousel__img ${i === index ? 'is-active' : ''}`}
            style={{ objectFit: s.fit ?? 'cover', objectPosition: s.position ?? '50% 50%' }}
            aria-hidden={i !== index}
          />
        ))}
        {badge && <span className="carousel__badge">{badge}</span>}
        <span className="carousel__count">
          {index + 1} / {len}
        </span>
        {len > 1 && (
          <>
            <button type="button" className="carousel__arrow carousel__arrow--prev" aria-label={t.projects.prev} onClick={() => go(index - 1)}>
              ‹
            </button>
            <button type="button" className="carousel__arrow carousel__arrow--next" aria-label={t.projects.next} onClick={() => go(index + 1)}>
              ›
            </button>
            <div className="carousel__dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`carousel__dot ${i === index ? 'is-active' : ''}`}
                  aria-label={`${t.projects.goTo} ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {showCaption && current?.caption && (
        <p className="carousel__caption" aria-live="polite">
          {current.caption}
        </p>
      )}
    </div>
  );
}
