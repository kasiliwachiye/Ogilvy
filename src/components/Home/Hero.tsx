import React, { useState } from "react";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import BgImage from "../../assets/hero-bg.png";
import { slides } from "../../data/homeData";
import useInterval from "../../hooks/useInterval";

const AUTO_MS = 2000;

const Hero: React.FC = () => {
  const [active, setActive] = useState(0);
  useInterval(() => setActive((i) => (i + 1) % slides.length), AUTO_MS);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };
  const dir = 1;

  return (
    <section className="relative isolate h-screen overflow-hidden text-white antialiased">
      <img
        src={BgImage}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-green-900/40 mix-blend-multiply" />

      <div className="container relative z-10 mx-auto flex h-full flex-col justify-between px-6 py-10">
        <div className="flex flex-1 flex-col mt-10 items-start justify-center gap-10 lg:flex-row lg:items-center">
          <div className="sm:max-w-none lg:max-w-lg  mt-16 md:mt-10 lg:mt-0">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.h1
                key={slides[active].title}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={dir}
                className="whitespace-pre-wrap text-5xl font-semibold leading-[0.95] tracking-wide lg:text-6xl"
              >
                {slides[active].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait" custom={dir}>
              <motion.p
                key={slides[active].body}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={dir}
                className="mt-6 text-lg font-extralight leading-tight tracking-wide text-gray-100"
              >
                {slides[active].body}
              </motion.p>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setActive(idx)}
                  className={`h-2 w-6 rounded-full transition focus:outline-none ${
                    idx === active ? "bg-yellow-400" : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-x-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.img
                key={slides[active].img}
                src={slides[active].img}
                alt=""
                loading="lazy"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={dir}
                className="max-h-[60vh] lg:max-h-[560px] w-auto drop-shadow-2xl"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between text-xs">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 font-extralight tracking-wide"
          >
            ON GOING PROJECTS
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </a>

          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-extralight tracking-wide text-gray-100">
              Scroll to Explore
            </span>
            <FiArrowDown className="animate-bounce text-xl" />
          </div>

          <a
            href="/partners"
            className="group inline-flex items-center gap-2 font-extralight tracking-wide"
          >
            OUR PARTNERS
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
