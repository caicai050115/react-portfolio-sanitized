import { motion, useReducedMotion } from 'framer-motion';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'right';
  tone?: 'light' | 'dark';
};

export default function SectionTitle({
  eyebrow,
  title,
  align = 'left',
  tone = 'dark',
}: SectionTitleProps) {
  const reduceMotion = useReducedMotion();
  const isRight = align === 'right';

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={isRight ? 'text-right' : 'text-left'}
    >
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.35em] ${
            tone === 'light' ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-[clamp(3.25rem,13vw,11rem)] font-black uppercase leading-[0.82] tracking-normal ${
          tone === 'light' ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </h2>
    </motion.div>
  );
}
