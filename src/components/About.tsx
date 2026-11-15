import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative min-h-[90vh] overflow-hidden bg-black px-5 py-28 text-white sm:px-8 lg:py-36"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-site items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 44 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl pt-28 lg:pt-56"
        >
          <p className="mb-7 text-sm font-black uppercase tracking-[0.32em] text-neutral-400">
            Profile / 2026
          </p>
          <p className="text-2xl font-black leading-tight sm:text-4xl">
            A student working across materials and machine learning.
          </p>
          <p className="mt-8 text-base leading-8 text-neutral-300">
            I build a research workflow around structured literature reading, knowledge cards,
            experiment notes and concise academic writing. Current interests include materials, machine learning, deep learning and superconducting RF cavities.
          </p>
        </motion.div>

        <div id="about-title" className="relative z-10 lg:self-start">
          <SectionTitle eyebrow="TheFoxXu" title="About" align="right" tone="light" />
        </div>
      </div>
    </section>
  );
}
