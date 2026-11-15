import { motion, useReducedMotion } from 'framer-motion';
import UptimeTimer from './UptimeTimer';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen overflow-hidden bg-white px-5 pt-28 text-black sm:px-8"
      aria-labelledby="home-title"
    >
      <div className="absolute bottom-8 right-6 hidden h-24 w-px bg-black sm:block" aria-hidden="true" />
      <UptimeTimer />

      <div className="relative z-10 mx-auto flex w-full max-w-site flex-col justify-center pb-20">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="ml-auto max-w-[16rem] pb-8 text-sm font-bold uppercase tracking-[0.28em] text-neutral-700 sm:mr-[14vw]"
        >
          Hello world
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 52 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="ml-auto w-full max-w-[980px]"
        >
          <h1
            id="home-title"
            className="text-[clamp(3rem,13.5vw,11.5rem)] font-black uppercase leading-[0.82] tracking-normal"
          >
            HELLO I'M
            <br />
            TheFoxXu
          </h1>
          <p className="mt-8 max-w-xl text-base font-semibold uppercase tracking-[0.14em] text-neutral-700 sm:text-lg">
            A student from Shanghai
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
            Student. Researching materials, machine learning, deep learning and superconducting RF cavities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
