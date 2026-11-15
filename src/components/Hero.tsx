import Reveal from './Reveal';
import UptimeTimer from './UptimeTimer';

export default function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="border-b border-ink/15">
      <div className="mx-auto grid max-w-site lg:grid-cols-[11.5rem_minmax(0,1fr)]">
        <aside className="hidden border-r border-ink/15 px-8 py-12 lg:block lg:px-10">
          <p className="label">01</p>
          <p className="label mt-3">Home</p>
          <div className="my-8 h-24 w-px bg-ink/25" aria-hidden="true" />
          <p className="label">Student</p>
          <p className="label mt-3">Shanghai</p>
        </aside>

        <div className="min-w-0 px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <Reveal className="[container-type:inline-size]">
            <p className="label text-mute lg:hidden">Student · Shanghai</p>
            <p className="label mt-3 text-mute lg:mt-0">Research homepage</p>
            <h1 id="home-title" className="display mt-4 break-words">
              TheFoxXu
            </h1>
          </Reveal>

          <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-lg font-semibold uppercase tracking-[0.12em] sm:text-xl">
                A student from Shanghai
              </p>
              <p className="prose-copy mt-4 max-w-md">
                Student. Researching materials, machine learning, deep learning and superconducting RF
                cavities.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-fill" href="#portfolio">
                  Selected work
                </a>
                <a className="btn btn-line" href="https://caijp.me/#projects">
                  caijp.me ↗
                </a>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 lg:col-start-7">
              <figure className="bg-ink">
                <a href="#portfolio" className="block">
                  <img
                    src="/assets/projects/homepage.webp"
                    alt="Decorative illustration. Go to selected work."
                    width="1152"
                    height="864"
                    className="aspect-[4/3] w-full object-contain object-center"
                  />
                </a>
                <figcaption className="label flex items-center justify-between gap-4 px-4 py-3 text-white/65">
                  <span>01 / splendid1.xyz</span>
                  <span>Illustration</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="mt-10 lg:mt-14">
            <UptimeTimer />
          </div>
        </div>
      </div>
    </section>
  );
}
