import Reveal from './Reveal';

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
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-white">
      <div className="mx-auto max-w-site px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <h2 id="portfolio-title" className="display-section">
          Portfolio
        </h2>

        <div className="mt-14 border-t border-black sm:mt-20">
          {projects.map((project) => (
            <article key={project.number} className="border-b border-black py-12 sm:py-16">
              <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                <Reveal className="lg:col-span-5">
                  <p className="text-sm">
                    {project.number} · {project.subtitle}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-none tracking-[-0.04em] sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-7">{project.description}</p>
                  <a className="link mt-6" href={project.href}>
                    View details ↗
                  </a>
                </Reveal>
                <Reveal className="lg:col-span-6 lg:col-start-7">
                  <img
                    src={project.image}
                    alt=""
                    width="1152"
                    height="864"
                    loading="lazy"
                    className="w-full"
                  />
                </Reveal>
              </div>
            </article>
          ))}
        </div>

        <a className="link mt-10" href="https://caijp.me">
          More on caijp.me ↗
        </a>
      </div>
    </section>
  );
}
