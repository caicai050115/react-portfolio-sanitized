import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-ink/15 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto flex min-h-[70vh] max-w-site flex-col">
        <SectionTitle
          id="contact-title"
          eyebrow="Open to Research Dialogue"
          title="Contact"
          align="right"
        />

        <Reveal className="mt-12 max-w-3xl lg:mt-16">
          <dl className="border-t border-ink/15">
            <div className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline">
              <dt className="label text-mute">Email</dt>
              <dd className="break-words text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                <a href="mailto:caijp@163.com" className="underline decoration-ink/25 underline-offset-4 hover:decoration-ink">
                  caijp@163.com
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline">
              <dt className="label text-mute">GitHub</dt>
              <dd className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                <a
                  href="https://github.com/caicai050115"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                >
                  GitHub ↗
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline">
              <dt className="label text-mute">Research Interest</dt>
              <dd className="text-xl font-semibold leading-snug tracking-[-0.03em] sm:text-2xl">
                Materials / Machine Learning / Deep Learning / Superconducting RF Cavities
              </dd>
            </div>
          </dl>

          <a className="btn btn-fill mt-8" href="mailto:caijp@163.com">
            Contact Me
          </a>
        </Reveal>

        <footer className="label mt-auto border-t border-ink/15 pt-6 text-mute">
          © 2026 TheFoxXu. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
