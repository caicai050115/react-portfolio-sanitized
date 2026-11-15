type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  id?: string;
  align?: 'left' | 'right';
  tone?: 'light' | 'dark';
};

export default function SectionTitle({
  eyebrow,
  title,
  id,
  align = 'left',
  tone = 'dark',
}: SectionTitleProps) {
  const mute = tone === 'light' ? 'text-white/55' : 'text-mute';

  return (
    <div className={align === 'right' ? 'lg:text-right' : 'text-left'}>
      {eyebrow ? <p className={`label mb-4 ${mute}`}>{eyebrow}</p> : null}
      <h2 id={id} className="display-section">
        {title}
      </h2>
    </div>
  );
}
