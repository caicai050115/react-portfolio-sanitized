import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="on-black bg-black text-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <h2 id="about-title" className="display-section">
          About
        </h2>
        <Reveal className="mt-12 max-w-xl sm:mt-16">
          <p>Profile / 2026</p>
          <p className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
            A student working across materials and machine learning.
          </p>
          <p className="mt-6 text-base leading-8 sm:text-lg">
            I build a research workflow around structured literature reading, knowledge cards,
            experiment notes and concise academic writing. Current interests include materials, machine
            learning, deep learning and superconducting RF cavities.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
