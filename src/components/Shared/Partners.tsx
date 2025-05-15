import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import WoodyBg from "../../assets/wooden.png";
import { partners } from "../../data/homeData";
import useMediaQuery from "../../hooks/useMediaQuery";

const Partners: React.FC = () => {
  const isMobile = !useMediaQuery("(min-width:640px)");
  const itemsPerPage = isMobile ? 1 : 4;
  const pageCount = Math.ceil(partners.length / itemsPerPage);
  const [page, setPage] = useState(0);
  const start = page * itemsPerPage;
  const visible = partners.slice(start, start + itemsPerPage);

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  return (
    <section id="partners" className="p-4 sm:p-20 bg-white">
      <div className="container relative mx-auto py-16 px-4 md:px-10 lg:px-40 bg-[#FEF2E9] text-center overflow-visible">
        <div
          className="absolute inset-0 pointer-events-none bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: `url(${WoodyBg})` }}
        />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 uppercase">
            Our Partners
          </h2>
          <p className="mt-4 max-w-full font-extralight mx-auto text-lg leading-relaxed">
            We have formed solid partnerships with these organizations, on the
            basis of our shared vision.
          </p>

          <div className="mt-12 relative flex items-center justify-center">
            <button
              onClick={prev}
              aria-label="previous"
              className="absolute left-2 sm:left-0 text-green-900 hover:text-green-700"
            >
              <FiArrowLeft size={28} />
            </button>

            <div
              className={`flex overflow-hidden gap-4 ${
                isMobile ? "px-4" : "px-0"
              }`}
            >
              {visible.map((src, i) => (
                <div
                  key={i}
                  className={`flex-none ${
                    isMobile ? "w-full h-40" : "w-56 h-32"
                  } flex items-center justify-center border border-green-800/40`}
                >
                  <img
                    src={src}
                    alt="partner logo"
                    className="max-h-full max-w-[85%] object-contain"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="next"
              className="absolute right-2 sm:right-0 text-green-900 hover:text-green-700"
            >
              <FiArrowRight size={28} />
            </button>
          </div>

          <button className="mt-16 inline-flex items-center gap-3 bg-green-900 hover:bg-green-800 text-white px-8 py-3 uppercase tracking-wide">
            Learn More
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
