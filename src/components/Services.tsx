import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const services = [
  {
    number: '01',
    title: 'Literature Reading',
    description: 'Academic paper reading, structured summaries and research note organization.',
    backTitle: '文献阅读',
    backDescription: '学术论文精读、结构化摘要与科研笔记整理。',
  },
  {
    number: '02',
    title: 'Research Topic',
    description: 'Focus on your primary research area and experimental or theoretical methods.',
    backTitle: '研究方向',
    backDescription: '聚焦你的主要研究方向、实验方法或理论工具。',
  },
  {
    number: '03',
    title: 'Knowledge System',
    description: 'Building personal research workflows, knowledge cards and literature databases.',
    backTitle: '知识系统',
    backDescription: '构建个人科研流程、知识卡片与文献数据库。',
  },
  {
    number: '04',
    title: 'Academic Writing',
    description: 'Support for thesis writing, literature review, figure planning and reports.',
    backTitle: '学术写作',
    backDescription: '支持论文写作、综述组织、图表规划与结构化报告。',
  },
];

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="service"
      className="relative overflow-hidden bg-black px-5 py-28 text-white sm:px-8 lg:py-36"
      aria-labelledby="service-title"
    >
      <div className="mx-auto max-w-site">
        <div id="service-title" className="mb-16">
          <SectionTitle eyebrow="Research Direction" title="Service" tone="light" />
        </div>

        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-px border border-white bg-white md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.article
              key={service.number}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-72 overflow-hidden bg-black text-white sm:min-h-80"
            >
              <div className="relative z-10 flex h-full flex-col p-7 sm:p-10">
                <div className="flex items-start justify-between gap-8">
                  <span className="text-sm font-black tracking-[0.32em] text-neutral-400">
                    {service.number}
                  </span>
                  <span className="h-px w-20 bg-current opacity-50" aria-hidden="true" />
                </div>
                <h3 className="mt-16 text-3xl font-black uppercase leading-none sm:text-5xl">
                  {service.title}
                </h3>
                <p className="mt-7 max-w-md text-base leading-8 text-neutral-300">
                  {service.description}
                </p>
              </div>

              <div
                className="absolute inset-0 z-20 overflow-hidden bg-white text-black [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-[850ms] [transition-timing-function:cubic-bezier(0.83,0,0.17,1)] group-hover:[clip-path:inset(0_0_0_0)]"
                aria-hidden="true"
              >
                <div className="flex h-full min-w-[calc(100vw-2.5rem)] flex-col p-7 sm:min-w-[40rem] sm:p-10 lg:min-w-[calc((min(100vw,1320px)-4rem)/2)]">
                  <div className="flex items-start justify-between gap-8">
                    <span className="text-sm font-black tracking-[0.32em] text-neutral-600">
                      {service.number}
                    </span>
                    <span className="h-px w-20 bg-black opacity-60" aria-hidden="true" />
                  </div>
                  <h3 className="mt-16 text-4xl font-black leading-none sm:text-6xl">
                    {service.backTitle}
                  </h3>
                  <p className="mt-7 max-w-md text-base font-semibold leading-8 text-neutral-700">
                    {service.backDescription}
                  </p>
                </div>
              </div>

              <span
                className="absolute bottom-0 left-0 top-0 z-30 w-px bg-white mix-blend-difference transition-[left] duration-[850ms] [transition-timing-function:cubic-bezier(0.83,0,0.17,1)] group-hover:left-full"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
