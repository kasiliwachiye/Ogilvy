import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowRight, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import BgImage from "../assets/hero-bg.png";
import House1 from "../assets/house.png";
import ZeroCarbonHousing from "../assets/zero-carbon-housing.png";
import CircularEconomies from "../assets/circular-economies.png";
import HouseDesignThumbnail from "../assets/house-design.png";
import BenefitsBg from "../assets/wooden.png";

type Slide = { title: string; body: string; img: string };

const SLIDES: Slide[] = [
  {
    title: "OUR VISION & PROMISE",
    body: "Our vision is to create self-sustaining, thriving communities in rural Africa and other marginalized parts of the world by introducing a model that allows for mass-scale “self-development”.",
    img: House1,
  },
  {
    title: "ZERO-CARBON HOUSING",
    body: "Each Rise-Home uses local bamboo and off-grid solar so families thrive without burdening the planet.",
    img: ZeroCarbonHousing,
  },
  {
    title: "CIRCULAR ECONOMIES",
    body: "We bootstrap village-scale recycling & micro-financing loops, turning waste streams into incomes.",
    img: CircularEconomies,
  },
];

const AUTO_MS = 3000;

const benefits = [
  "The iRise housing structure can be mass-manufactured affordably.",
  "The house is portable to maintain resale value and make the house financially viable.",
  "The houses can be easily and quickly assembled on-site by inexperienced women and youth.",
];

const Home: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      AUTO_MS
    );
    return () => clearInterval(id);
  }, []);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const dir = 1;

  return (
    <>
      <section className="relative isolate h-screen overflow-hidden text-white antialiased">
        <img
          src={BgImage}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-green-900/40 mix-blend-multiply" />

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-between px-6 py-10">
          <div className="flex flex-1 flex-col items-start justify-center gap-10 md:flex-row md:items-center">
            <div className="sm:max-w-none lg:max-w-lg">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.h1
                  key={SLIDES[active].title}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={dir}
                  className="whitespace-pre-wrap text-5xl font-semibold leading-[0.95] tracking-wide md:text-6xl"
                >
                  {SLIDES[active].title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait" custom={dir}>
                <motion.p
                  key={SLIDES[active].body}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={dir}
                  className="mt-6 text-lg font-extralight leading-tight tracking-wide text-gray-100"
                >
                  {SLIDES[active].body}
                </motion.p>
              </AnimatePresence>

              <div className="mt-10 flex items-center gap-3">
                {SLIDES.map((_, idx) => (
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

            <div className="relative mt-10 flex flex-1 items-center justify-center overflow-x-hidden">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.img
                  key={SLIDES[active].img}
                  src={SLIDES[active].img}
                  alt=""
                  loading="lazy"
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={dir}
                  className="max-h-[60vh] md:max-h-[560px] w-auto drop-shadow-2xl"
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
      <section id="house-design" className="relative py-12 sm:py-16 md:py-20">
        <div
          className="absolute inset-y-0 right-0 my-8 mx-4 sm:mx-8 md:mx-2 lg:mx-20 w-full sm:w-[85%] md:w-1/2 bg-[#FEF2E9]"
          aria-hidden="true"
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-6 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 relative z-10">
          <div className="relative w-full md:w-7/12 overflow-visible">
            <img
              src={HouseDesignThumbnail}
              alt="House design video thumbnail"
              loading="lazy"
              className="w-full h-auto object-cover max-h-64 sm:max-h-80 md:max-h-[560px]"
            />
            <div className="absolute inset-0" aria-hidden="true" />
            <button
              type="button"
              aria-label="Play house design video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 bg-[#49B01D] rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <FiPlay className="text-white text-xl sm:text-2xl md:text-3xl" />
              </span>
            </button>
          </div>

          <div className="w-full md:w-5/12 relative z-20 md:pl-8 lg:pl-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-green-900">
              HOUSE
              <br />
              DESIGN
            </h2>
            <p className="mt-4 sm:mt-6 text-lg font-light leading-normal text-gray-900">
              Our patent-pending design employs a strategy that reduces the
              environmental impact associated with traditional residential
              construction. This is how we envision your safe haven.
            </p>
          </div>
        </div>
      </section>
      <section
        id="benefits"
        className="py-20"
        style={{ backgroundImage: `url(${BenefitsBg})` }}
      >
        <div
          className="container mx-auto max-w-7xl px-8 md:px-10 lg:px-40 bg-black bg-cover bg-center relative"
          style={{ backgroundImage: `url(${BenefitsBg})` }}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 text-center text-white py-16">
            <h2 className="text-4xl md:text-5xl font-semibold uppercase text-[#FEF2E9]">
              BENEFITS
            </h2>
            <p className="mt-4 mx-auto max-w-full text-lg leading-relaxed">
              The iRise houses are affordable, simple-to-build with sustainable
              wood and powered by renewable solar energy. In addition, they come
              with the following benefits:
            </p>

            <div className="m-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((desc, idx) => (
                <div key={idx} className="relative border border-white/30 p-8">
                  <span className="absolute -top-5 -left-4 bg-black px-2">
                    <span className="text-2xl md:text-4xl font-bold text-[#FEF2E9]">
                      {`0${idx + 1}`}
                    </span>
                  </span>
                  <p className="leading-relaxed font-thin text-start">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
