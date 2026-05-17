import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black px-5 pt-28 text-white sm:px-8 lg:pt-36"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-site flex-col justify-between">
        <div id="contact-title" className="relative z-10">
          <SectionTitle eyebrow="Open to Research Dialogue" title="Contact" align="right" tone="light" />
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 42 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl pb-10"
        >
          <dl className="grid gap-5 text-base leading-7 sm:text-lg">
            <div>
              <dt className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">Email</dt>
              <dd className="mt-1 break-words font-semibold">your.email@example.com</dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">GitHub</dt>
              <dd className="mt-1 font-semibold">@your-github-handle</dd>
            </div>
            <div>
              <dt className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">
                Research Interest
              </dt>
              <dd className="mt-1 font-semibold">
                Your Research Interest / Your Academic Direction
              </dd>
            </div>
          </dl>

          <a
            href="mailto:your.email@example.com"
            className="mt-10 inline-flex min-h-12 items-center border border-white px-7 text-sm font-black uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black"
          >
            Contact Me
          </a>
        </motion.div>

        <footer className="relative z-10 border-t border-white/20 py-6 text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
          © 2026 Your Name. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
