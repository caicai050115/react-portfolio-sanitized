import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import SectionTitle from './SectionTitle';

const projects = [
  {
    number: '01',
    title: 'splendid1.xyz',
    subtitle: 'Research Homepage',
    description:
      'Black-and-white personal research homepage built with React, Vite and Tailwind, self-hosted on nginx behind Cloudflare.',
    image: '/assets/projects/homepage.webp',
    href: 'https://caijp.me/#projects',
  },
  {
    number: '02',
    title: 'react-portfolio-sanitized',
    subtitle: 'Homepage Template',
    description:
      'A sanitized, reusable black-and-white personal homepage template derived from this research site.',
    image: '/assets/projects/template.webp',
    href: 'https://caijp.me/#projects',
  },
  {
    number: '03',
    title: 'Research Knowledge System',
    subtitle: 'Workflow',
    description:
      'Structured literature reading, knowledge cards, experiment notes and literature databases.',
    image: '/assets/projects/knowledge.webp',
    href: 'https://caijp.me/#projects',
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card group h-[26rem] bg-black sm:h-[28rem]"
      data-flipped={flipped}
      onClick={(event) => {
        if (window.matchMedia('(hover: none)').matches && !(event.target as HTMLElement).closest('a')) {
          setFlipped((value) => !value);
        }
      }}
    >
      <div className="flip-inner">
        <div className="flip-face flex flex-col bg-black p-7 text-white sm:p-10">
          <div className="flex items-start justify-between gap-8">
            <span className="text-sm font-black tracking-[0.32em] text-neutral-400">{project.number}</span>
            <span className="h-px w-20 bg-current opacity-50" aria-hidden="true" />
          </div>
          <p className="mt-12 text-xs font-black uppercase tracking-[0.3em] text-neutral-500">
            {project.subtitle}
          </p>
          <h3 className="mt-3 break-words text-3xl font-black uppercase leading-none sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-6 text-base leading-7 text-neutral-300">{project.description}</p>
          <a
            href={project.href}
            className="mt-auto inline-flex w-fit text-xs font-black uppercase tracking-[0.22em] text-white underline decoration-neutral-500 underline-offset-4 hover:text-neutral-300"
          >
            View details ↗
          </a>
        </div>

        <a
          href={project.href}
          className="flip-face flip-back block overflow-hidden bg-white text-black"
          aria-label={`${project.title} — view details on caijp.me`}
        >
          <img
            src={project.image}
            alt={`${project.title} project illustration`}
            loading="lazy"
            className="h-full w-full object-cover grayscale"
          />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.22em]">
            <span>
              {project.number} / {project.title}
            </span>
            <span>View details ↗</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black px-5 py-28 text-white sm:px-8 lg:py-36"
      aria-labelledby="portfolio-title"
    >
      <div className="mx-auto max-w-site">
        <div id="portfolio-title" className="mb-16">
          <SectionTitle eyebrow="Selected Work" title="Portfolio" tone="light" />
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-px border border-white bg-white md:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-end">
          <a
            href="https://caijp.me"
            className="inline-flex min-h-12 items-center border border-white px-7 text-sm font-black uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black"
          >
            More on caijp.me ↗
          </a>
        </div>
      </div>
    </section>
  );
}
