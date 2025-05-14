import React from "react";
import { FiPlay } from "react-icons/fi";
import HouseDesignThumbnail from "../../assets/house-design.png";

const HouseDesign: React.FC = () => (
  <section id="house-design" className="relative py-12 sm:py-16 md:py-20">
    <div
      className="hidden sm:block absolute inset-y-0 right-0 my-8 sm:mx-8 md:mx-2 lg:mx-20 w-[85%] md:w-1/2 bg-[#FEF2E9]"
      aria-hidden="true"
    />
    <div className="container mx-auto max-w-7xl px-2 sm:px-6 md:px-6 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12 relative z-10">
      <div className="relative w-full md:w-7/12 overflow-visible">
        <img
          src={HouseDesignThumbnail}
          alt="House design video thumbnail"
          loading="lazy"
          className="w-full h-auto object-cover max-h-48 sm:max-h-80 md:max-h-[560px]"
        />
        <button
          type="button"
          aria-label="Play house design video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20 bg-[#49B01D] rounded-full flex items-center justify-center">
            <FiPlay className="text-white text-lg sm:text-xl md:text-3xl" />
          </span>
        </button>
      </div>
      <div className="w-full md:w-5/12 relative z-20 md:pl-8 lg:pl-16 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-green-900">
          HOUSE
          <br />
          DESIGN
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg font-light leading-relaxed text-gray-900">
          Our patent-pending design employs a strategy that reduces the
          environmental impact associated with traditional residential
          construction. This is how we envision your safe haven.
        </p>
      </div>
    </div>
  </section>
);

export default HouseDesign;
