import React from "react";
import { heroData } from "../../data/sustainableData";

const Hero: React.FC = () => (
  <section
    className="relative min-h-[24rem] overflow-hidden"
    style={{
      backgroundImage: `url(${heroData.bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-green-900/60 mix-blend-multiply" />
    <div className="relative h-full">
      <h1 className="mt-72 md:mt-56 lg:mt-48 ml-8 lg:ml-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-16">
        {heroData.title}
      </h1>
    </div>
  </section>
);

export default Hero;
