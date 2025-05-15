import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMediaQuery from "../../hooks/useMediaQuery";
import Forest from "../../assets/forest.jpg";
import WoodyBg from "../../assets/wooden.png";

const newsData = [
  { id: 1, title: "East African Hardwoods" },
  { id: 2, title: "Soil Carried by Hands" },
  { id: 3, title: "Tree Stump Harvest" },
  { id: 4, title: "Rural Water Systems" },
  { id: 5, title: "Community Markets" },
];

const NewsUpdate: React.FC = () => {
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(min-width: 768px)");
  const itemsPerPage = isLarge ? 3 : isMedium ? 2 : 1;

  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const visible = newsData.slice(startIndex, startIndex + itemsPerPage);

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  return (
    <section className="my-24 px-8">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${WoodyBg})`, zIndex: 99 }}
          aria-hidden="true"
        />

        <div className="relative max-w-[82.5rem] mx-auto bg-[#165620] text-[#FBEADC] grid lg:grid-cols-[auto_1fr] items-center">
          <div className="lg:max-w-md p-8 md:p-12 lg:p-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight uppercase font-semibold mb-8">
              News Updates
            </h2>
            <p className="text-lg font-extralight mb-8 max-w-xl">
              Find all the information and updates about our past, present and
              future projects here.
            </p>
            <button className="bg-[#165620] text-white text-xs border border-[#FFF6EE] uppercase flex items-center gap-2 py-3 px-8 lg:mb-8 cursor-pointer">
              View All
              <FiArrowRight />
            </button>
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex justify-end space-x-4 py-8">
              <button
                onClick={prev}
                title="Previous"
                className="text-white p-2 cursor-pointer"
              >
                <FiArrowLeft size={24} />
              </button>
              <button
                onClick={next}
                title="Next"
                className="text-white p-2 cursor-pointer"
              >
                <FiArrowRight size={24} />
              </button>
            </div>

            <ul className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {visible.map((item) => (
                <li key={item.id} className="bg-[#FBEADC] text-[#165620] p-2">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(22,86,32,0), rgba(22,86,32,0.6)), url(${Forest})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="h-40 w-full flex items-end justify-start mb-4"
                  />
                  <div className="max-w-48 mx-auto text-center">
                    <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                    <a
                      href={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-[#165620] text-white text-xs border border-[#FFF6EE] uppercase flex items-center justify-center py-3 px-8"
                    >
                      Learn More
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdate;
