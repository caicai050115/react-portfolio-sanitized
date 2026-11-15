import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="on-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-site items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-28">
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionTitle id="about-title" eyebrow="TheFoxXu" title="About" align="right" tone="light" />
        </div>

        <Reveal className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end">
          <p className="label text-white/50">Profile / 2026</p>
          <p className="mt-6 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
            A student working across materials and machine learning.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
            I build a research workflow around structured literature reading, knowledge cards,
            experiment notes and concise academic writing. Current interests include materials, machine
            learning, deep learning and superconducting RF cavities.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
