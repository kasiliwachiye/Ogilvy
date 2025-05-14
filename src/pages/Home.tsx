import React, { useEffect, useState } from "react";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import BgImage from "../assets/hero-bg.png";
import House1 from "../assets/house.png";
import ZeroCarbonHousing from "../assets/zero-carbon-housing.png";
import CircularEconomies from "../assets/circular-economies.png";
import HouseDesignThumbnail from "../assets/house-design.png";
import WoodyBg from "../assets/wooden.png";
import PathwayImage from "../assets/pathway.png";
import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Partner1 from "../assets/partner-1.png";
import Partner2 from "../assets/partner-2.png";
import Partner3 from "../assets/partner-3.png";
import Partner4 from "../assets/partner-4.png";

type Slide = { title: string; body: string; img: string };

const partners = [Partner1, Partner2, Partner3, Partner4];

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
  const [index, setIndex] = useState(0);

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

  const visible = partners.slice(index, index + 4);
  const next = () => setIndex((i) => (i + 1) % partners.length);
  const prev = () =>
    setIndex((i) => (i - 1 + partners.length) % partners.length);

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
        style={{ backgroundImage: `url(${WoodyBg})` }}
      >
        <div
          className="container mx-auto max-w-7xl px-8 md:px-10 lg:px-40 bg-black bg-cover bg-center relative"
          style={{ backgroundImage: `url(${WoodyBg})` }}
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
      <section id="pathway" className="relative py-12 sm:py-16 md:py-20">
        <div
          className="absolute inset-y-0 left-0 my-8 mx-4 sm:mx-8 md:mx-2 lg:mx-20 w-full sm:w-[85%] md:w-1/2 bg-[#FEF2E9]"
          aria-hidden="true"
        />

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-6 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 relative z-10">
          <div className="w-full md:w-5/12 relative z-20 text-center md:text-left md:pr-16 lg:pr-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-green-900">
              PATHWAY
            </h2>
            <p className="mt-4 font-light leading-normal text-gray-900">
              Future Earth’s blueprint is based on a model that was designed by
              one of our founders, Maya Minkova, 25 years ago while still a
              student, for a safe and sustainable homes project in South African
              townships. We have adapted the PATHWAY (power, agriculture,
              technology, housing, women and youth) model as the framework that
              outlines our projects.
            </p>
            <p className="mt-6 font-light leading-normal text-gray-900">
              We believe that women and the youth, who make up more than half of
              the society, are critical in unlocking self-development. The
              project will target women as homeowners, giving them assets and
              credit and therefore power to self-develop. We also emphasize
              support for SMEs owned by women and young people to provide
              services within the community.
            </p>
          </div>

          <div className="relative w-full md:w-7/12 overflow-visible">
            <img
              src={PathwayImage}
              alt="Looking up at tree canopy"
              loading="lazy"
              className="w-full h-auto object-cover max-h-64 sm:max-h-80 md:max-h-[560px]"
            />
          </div>
        </div>
      </section>
      <section
        id="partners"
        className="p-20"
        style={{ backgroundImage: `url(${WoodyBg})` }}
      >
        <div
          className="container mx-auto py-16 px-8 md:px-10 lg:px-40 bg-[#FEF2E9] bg-cover bg-center relative text-center"
          style={{ backgroundImage: `url(${WoodyBg})` }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-green-900 uppercase">
            Our Partners
          </h2>
          <p className="mt-4 max-w-full font-extralight mx-auto text-lg leading-relaxed">
            We have formed solid partnerships with these organizations, on the
            basis of our shared vision.
          </p>

          {/* carousel row */}
          <div className="mt-12 relative flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute -left-8 text-green-900 hover:text-green-700"
              aria-label="previous"
            >
              <FiArrowLeft size={28} />
            </button>

            <div className="flex gap-8">
              {visible.map((src, i) => (
                <div
                  key={i}
                  className="w-56 h-32 flex items-center justify-center border border-green-800/40 bg-transparent"
                >
                  <img
                    src={src}
                    alt="partner logo"
                    className="max-h-20 max-w-[85%] object-contain"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={next}
              className="absolute -right-8 text-green-900 hover:text-green-700"
              aria-label="next"
            >
              <FiArrowRight size={28} />
            </button>
          </div>

          <button className="mt-16 inline-flex items-center gap-3 bg-green-900 hover:bg-green-800 text-white px-8 py-3 uppercase tracking-wide">
            Learn More
            <FiArrowRight />
          </button>
        </div>
      </section>
      <section id="ongoing-projects" className="py-16 sm:py-20">
        <div
          className="container mx-auto max-w-7xl px-4 sm:px-6 bg-green-900 relative overflow-visible
               h-auto sm:h-[20rem] md:h-[24rem] pb-20 sm:pb-24"
          style={{
            backgroundImage: `url(${WoodyBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="py-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase">
              ONGOING PROJECTS
            </h2>

            <p className="mt-4 leading-relaxed font-extralight mx-auto max-w-4xl px-2 sm:px-0">
              For Future Earth to deliver the country’s rural transformation
              agenda, GoMalawi and CDI are supporting the organization by
              providing them with
              <strong> 500,000&nbsp;hectares of land </strong>
              for co-operative agriculture, sustainable reforestation, and the
              <strong> delivery of 500,000 homes</strong>. Here are the current
              projects we’re working on:
            </p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-center items-end gap-6 sm:gap-8
               -mt-14 sm:-mt-24 px-4 sm:px-0"
        >
          <img
            src={Project1}
            alt="Project 1"
            className="w-full sm:w-1/2 md:w-1/3 max-w-[20rem] sm:max-w-xs md:max-w-md
                 mx-auto sm:mx-0 -translate-y-4 sm:-translate-y-8"
          />
          <img
            src={Project2}
            alt="Project 2"
            className="w-full sm:w-1/2 md:w-1/3 max-w-[20rem] sm:max-w-xs md:max-w-md
                 mx-auto sm:mx-0 -translate-y-4 sm:-translate-y-8"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
