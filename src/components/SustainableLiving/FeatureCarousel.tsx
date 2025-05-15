import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { features } from "../../data/sustainableData";
import SolarIcon from "../../assets/solar-power.png";
import ToiletIcon from "../../assets/waterless-toilets.png";
import MortgageIcon from "../../assets/low-cost-mortgage.png";
import GardenIcon from "../../assets/garden-to-plant-trees.png";
import StoveIcon from "../../assets/clean-efficient-cook-stove.png";
import InternetIcon from "../../assets/internet-access-device.png";

const variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20 },
};

const bottomColors = ["#2d6737", "#235f2b"];
const activeColor = "#50a501";
const delay = 2000;

const FeatureCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = features.length;
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => setIndex((i) => (i + 1) % total),
      delay
    );
    return () => resetTimeout();
  }, [index, total]);

  const prev = () => {
    resetTimeout();
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    resetTimeout();
    setIndex((i) => (i + 1) % total);
  };

  const { title, description, image } = features[index];
  const iconURLs = [
    SolarIcon,
    ToiletIcon,
    MortgageIcon,
    GardenIcon,
    StoveIcon,
    InternetIcon,
  ];

  return (
    <section id="features" className="bg-white py-12">
      <div className="max-w-[90%] mx-auto overflow-hidden shadow-md">
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${image})`, minHeight: "30rem" }}
        >
          <div className="absolute top-4 right-4 flex space-x-2 z-20">
            <button
              onClick={prev}
              aria-label="Previous"
              className="text-white p-2 cursor-pointer"
            >
              <FiArrowLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="text-white p-2 cursor-pointer"
            >
              <FiArrowRight size={20} />
            </button>
          </div>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 bg-gradient-to-r from-[#235f2b]/80 to-transparent p-8 flex flex-col justify-between text-white"
            >
              <div className="lg:p-12">
                <img
                  src={iconURLs[index]}
                  alt={title}
                  className="w-16 h-16 mb-4"
                />
                <h2 className="max-w-xs text-4xl font-bold leading-tight mb-4 whitespace-pre-wrap uppercase">
                  {title}
                </h2>
                <p className="max-w-md text-base leading-relaxed font-extralight">
                  {description}
                </p>
              </div>
              <div className="flex space-x-2 lg:p-12">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setIndex(idx)}
                    className={`rounded-full cursor-pointer transition ${
                      idx === index ? "w-4 h-2 bg-white" : "w-2 h-2 bg-white/50"
                    }`}
                    title="Select this feature"
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-center">
          {features.map((feat, idx) => (
            <button
              key={idx}
              onClick={() => {
                resetTimeout();
                setIndex(idx);
              }}
              className="flex flex-col items-center justify-center px-4 py-6 cursor-pointer"
              style={{
                backgroundColor:
                  idx === index
                    ? activeColor
                    : bottomColors[idx % bottomColors.length],
              }}
            >
              <img
                src={iconURLs[idx]}
                alt={feat.title}
                className="w-8 h-8 mb-2"
              />
              <span className="text-xs font-light text-white">
                {feat.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
