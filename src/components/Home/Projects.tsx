import React from "react";
import Project1 from "../../assets/project-1.png";
import Project2 from "../../assets/project-2.png";
import WoodyBg from "../../assets/wooden.png";

const Projects: React.FC = () => (
  <section id="ongoing-projects" className="py-16 sm:py-20">
    <div
      className="container mx-auto max-w-7xl px-4 sm:px-6 bg-green-900 relative overflow-visible h-auto sm:h-[20rem] md:h-[24rem] pb-20 sm:pb-24"
      style={{
        backgroundImage: `url(${WoodyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-12 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase">
          ONGOING PROJECTS
        </h2>
        <p className="mt-4 leading-relaxed font-extralight mx-auto max-w-4xl px-2 sm:px-0">
          For Future Earth to deliver the country’s rural transformation agenda,
          GoMalawi and CDI are supporting the organization by providing them
          with <strong>500,000&nbsp;hectares of land</strong> for co-operative
          agriculture, sustainable reforestation, and the{" "}
          <strong>delivery of 500,000 homes</strong>. Here are the current
          projects we’re working on:
        </p>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-center items-end gap-6 sm:gap-8 -mt-14 sm:-mt-24 px-4 sm:px-0">
      <img
        src={Project1}
        alt="Project 1"
        className="w-full sm:w-1/2 md:w-1/3 max-w-[20rem] sm:max-w-xs md:max-w-md mx-auto sm:mx-0 -translate-y-4 sm:-translate-y-8"
      />
      <img
        src={Project2}
        alt="Project 2"
        className="w-full sm:w-1/2 md:w-1/3 max-w-[20rem] sm:max-w-xs md:max-w-md mx-auto sm:mx-0 -translate-y-4 sm:-translate-y-8"
      />
    </div>
  </section>
);

export default Projects;
