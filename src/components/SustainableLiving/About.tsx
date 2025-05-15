import React from "react";
import { aboutData } from "../../data/sustainableData";

const About: React.FC = () => (
  <section id="about-sustainable" className="py-16 bg-white">
    <div className="mx-auto px-8 md:px-10 lg:px-16">
      <div className="bg-[#FEF2E9] p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 leading-snug lg:w-1/2">
            {aboutData.title}
          </h2>
          {aboutData.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-gray-900">
              {p}
            </p>
          ))}
        </div>
        <div className="relative lg:w-1/2 overflow-visible">
          <img
            src={aboutData.illustration}
            alt="Sustainable living illustration"
            className="w-full mt-16 h-auto object-contain max-h-80 sm:max-h-96"
          />
          <img
            src={aboutData.smallIllustration}
            alt="Detail illustration"
            className="absolute top-4 left-4 sm:top-6 sm:left-6 w-32 sm:w-64 z-10 -translate-y-1/4"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
