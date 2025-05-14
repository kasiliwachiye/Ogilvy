import React from "react";
import WoodyBg from "../../assets/wooden.png";
import { benefits } from "../../data/homeData";

const Benefits: React.FC = () => (
  <section id="benefits" className="py-20">
    <div className="container relative mx-auto max-w-7xl px-8 md:px-10 lg:px-40 text-center text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url(${WoodyBg})` }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold uppercase text-[#FEF2E9]">
          BENEFITS
        </h2>
        <p className="mt-4 mx-auto max-w-full text-lg leading-relaxed">
          The iRise houses are affordable, simple-to-build with sustainable wood
          and powered by renewable solar energy. In addition, they come with the
          following benefits:
        </p>
        <div className="m-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((desc, idx) => (
            <div key={idx} className="relative border border-white/30 p-8">
              <span className="absolute -top-5 -left-4 bg-black px-2">
                <span className="text-2xl md:text-4xl font-bold text-[#FEF2E9]">{`0${
                  idx + 1
                }`}</span>
              </span>
              <p className="leading-relaxed font-thin text-start">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Benefits;
