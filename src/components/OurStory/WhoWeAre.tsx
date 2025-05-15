import React from "react";
import illustration1 from "../../assets/our-story-illustration-bottom.png";
import illustration2 from "../../assets/our-story-illustration-top.png";

const WhoWeAre: React.FC = () => (
  <section className="my-24 px-8 sm:px-4 md:px-6">
    <div className="max-w-[1320px] mx-auto bg-[#FBEADC] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[4fr_3fr] items-center">
      <div className="p-8 md:p-12 lg:p-16 text-lg font-extralight">
        <h2 className="text-[#165620] text-4xl md:text-5xl lg:text-6xl font-medium uppercase mb-8">
          Who We Are
        </h2>
        <p className="mb-6">
          Future Earth was founded in 2018 by a team of people driven by a
          passion to break the poverty cycle in the developing world and empower
          people with self-sustaining wealth creation avenues.
        </p>
        <p className="mb-6">
          From decades of experience in sustainable forestry, our founders
          brought a wealth of knowledge to apply timber as a resource to
          alleviate housing poverty in rural Africa.
        </p>
        <p className="mb-6">
          We use the PATHWAY blueprint—power, agriculture, technology, housing,
          women, youth—designed 25 years ago for South African townships.
        </p>
        <p className="mb-6">
          Our team's combined backgrounds in forestry, finance, emerging
          markets, and agriculture unite to create better lives for people in
          need.
        </p>
      </div>
      <div className="space-y-8 p-8 sm:p-4 md:p-6 flex flex-col">
        <img src={illustration1} alt="" className="w-full" />
        <img src={illustration2} alt="" className="w-full" />
      </div>
    </div>
  </section>
);

export default WhoWeAre;
