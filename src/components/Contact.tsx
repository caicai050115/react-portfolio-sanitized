import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <h2 id="contact-title" className="display-section">
          Contact
        </h2>

        <Reveal className="mt-12 max-w-3xl sm:mt-16">
          <p className="text-lg sm:text-xl">Open to Research Dialogue</p>
          <dl className="mt-10 border-t border-black">
            <div className="grid gap-2 border-b border-black py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
              <dt>Email</dt>
              <dd className="break-words text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                <a href="mailto:caijp@163.com" className="border-b border-black">
                  caijp@163.com
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-black py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
              <dt>GitHub</dt>
              <dd className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                <a
                  href="https://github.com/caicai050115"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-black"
                >
                  GitHub
                </a>
              </dd>
            </div>
            <div className="grid gap-2 border-b border-black py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
              <dt>Research Interest</dt>
              <dd className="text-xl font-semibold leading-snug tracking-[-0.03em] sm:text-2xl">
                Materials / Machine Learning / Deep Learning / Superconducting RF Cavities
              </dd>
            </div>
          </dl>
          <a className="link mt-8" href="mailto:caijp@163.com">
            Contact Me
          </a>
        </Reveal>

        <footer className="mt-24 border-t border-black pt-6 text-sm">
          © 2026 TheFoxXu. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
