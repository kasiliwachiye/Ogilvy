import React from "react";
import PathwayImage from "../../assets/pathway.png";

const Pathway: React.FC = () => (
  <section id="pathway" className="relative py-12 sm:py-16 md:py-20">
    <div
      className="hidden sm:block absolute inset-y-0 left-0 my-8 sm:mx-8 md:mx-2 lg:mx-20 w-[85%] md:w-1/2 bg-[#FEF2E9]"
      aria-hidden="true"
    />
    <div className="container mx-auto max-w-7xl px-2 sm:px-6 md:px-6 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12 relative z-10">
      <div className="w-full md:w-5/12 relative z-20 text-center md:text-left md:pr-16 lg:pr-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-green-900">
          PATHWAY
        </h2>
        <p className="mt-4 text-base font-light leading-relaxed text-gray-900">
          Future Earth’s blueprint is based on a model that was designed by one
          of our founders, Maya Minkova, 25 years ago while still a student, for
          a safe and sustainable homes project in South African townships. We
          have adapted the PATHWAY (power, agriculture, technology, housing,
          women and youth) model as the framework that outlines our projects.
        </p>
        <p className="mt-6 text-base font-light leading-relaxed text-gray-900">
          We believe that women and the youth, who make up more than half of the
          society, are critical in unlocking self-development. The project will
          target women as homeowners, giving them assets and credit and
          therefore power to self-develop. We also emphasize support for SMEs
          owned by women and young people to provide services within the
          community.
        </p>
      </div>
      <div className="relative w-full md:w-7/12 overflow-visible">
        <img
          src={PathwayImage}
          alt="Looking up at tree canopy"
          loading="lazy"
          className="w-full h-auto object-cover max-h-48 sm:max-h-80 md:max-h-[560px]"
        />
      </div>
    </div>
  </section>
);

export default Pathway;
