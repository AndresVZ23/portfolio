interface Props {
  eyebrow: string;
  title: [string, string] | string[];
  keepLine?: boolean;
}

/** Encabezado de sección: etiqueta tipo código + título grande con la segunda parte en rojo. */
export default function SectionHead({ eyebrow, title, keepLine }: Props) {
  return (
    <div className="section-head" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">
        {title[0]}
        <span className={`accent ${keepLine ? 'keep-line' : ''}`}>{title[1]}</span>
      </h2>
    </div>
  );
}
