import Reveal from './Reveal';
import UptimeTimer from './UptimeTimer';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="bg-white">
      <div className="mx-auto max-w-site px-5 sm:px-8 lg:px-10">
        <Reveal className="[container-type:inline-size] pt-16 sm:pt-24 lg:pt-28">
          <h1 id="home-title" className="display">
            TheFoxXu
          </h1>
        </Reveal>

        <Reveal className="mt-12 max-w-xl sm:mt-16">
          <p className="text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
            A student from Shanghai
          </p>
          <p className="mt-5 text-base leading-7 sm:text-lg">
            Student. Researching materials, machine learning, deep learning and superconducting RF
            cavities.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2">
            <a className="link" href="#portfolio">
              Selected work
            </a>
            <a className="link" href="https://caijp.me/#projects">
              caijp.me
            </a>
          </div>
        </Reveal>

        <div className="mt-24 border-t border-black pb-8 pt-4 sm:mt-32">
          <UptimeTimer />
        </div>
      </div>
    </section>
  );
}
