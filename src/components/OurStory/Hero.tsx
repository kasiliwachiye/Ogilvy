import React from "react";

type Props = { title: string; imgUrl: string };
const Hero: React.FC<Props> = ({ title, imgUrl }) => (
  <section
    className="h-[30rem] w-full flex items-end"
    style={{
      backgroundImage: `linear-gradient(to right, rgba(22,86,32,0.9), rgba(22,86,32,0)), url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="w-full mx-auto p-12">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium uppercase leading-tight">
        {title}
      </h1>
    </div>
  </section>
);

export default Hero;
