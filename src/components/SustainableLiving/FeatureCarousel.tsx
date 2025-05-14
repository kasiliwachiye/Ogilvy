import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { features } from "../../data/sustainableData";

const variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20 },
};

const FeatureCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = features.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const { icon: Icon, title, description, image } = features[index];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-green-900/50 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8">
            <button
              onClick={prev}
              className="text-white text-2xl p-2 rounded-full bg-black/30 hover:bg-black/50"
              aria-label="Previous"
            >
              <FiArrowLeft />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="mx-6 text-center md:text-left text-white max-w-md"
              >
                <Icon className="text-4xl sm:text-5xl mb-4 inline-block" />
                <h3 className="text-2xl sm:text-3xl font-semibold">{title}</h3>
                <p className="mt-2 text-base sm:text-lg">{description}</p>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={next}
              className="text-white text-2xl p-2 rounded-full bg-black/30 hover:bg-black/50"
              aria-label="Next"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-yellow-400" : "bg-white/60"
              }`}
              title={`Go to feature ${i + 1}`}
              aria-label={`Go to feature ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
