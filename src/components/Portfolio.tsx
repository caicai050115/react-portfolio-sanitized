import Reveal from './Reveal';
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

export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-site">
        <SectionTitle id="portfolio-title" eyebrow="Selected Work" title="Portfolio" />

        <div className="mt-12 border-t border-ink/15 lg:mt-16">
          {projects.map((project, index) => {
            const imageLeads = index % 2 === 1;

            return (
              <article
                key={project.number}
                className="grid items-center gap-8 border-b border-ink/15 py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
              >
                <Reveal className={imageLeads ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-5'}>
                  <p className="label text-mute">
                    {project.number} — {project.subtitle}
                  </p>
                  <h3 className="mt-3 text-3xl font-extrabold uppercase leading-none tracking-[-0.045em] sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="prose-copy mt-5 max-w-md">{project.description}</p>
                  <a
                    href={project.href}
                    className="label mt-6 inline-flex min-h-11 items-center underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
                  >
                    View details ↗
                  </a>
                </Reveal>

                <Reveal
                  className={
                    imageLeads
                      ? 'lg:col-span-6 lg:col-start-1 lg:row-start-1'
                      : 'lg:col-span-6 lg:col-start-7'
                  }
                >
                  <figure className="bg-ink">
                    <img
                      src={project.image}
                      alt={`${project.title} decorative illustration`}
                      width="1152"
                      height="864"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-contain"
                    />
                    <figcaption className="label px-4 py-3 text-white/60">Illustration</figcaption>
                  </figure>
                </Reveal>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-start lg:justify-end">
          <a className="btn btn-line" href="https://caijp.me">
            More on caijp.me ↗
          </a>
        </div>
      </div>
    </section>
  );
}
