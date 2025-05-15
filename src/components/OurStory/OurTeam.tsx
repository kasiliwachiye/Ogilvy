import React, { useState } from "react";
import teamData from "../../data/teamData.json";
import { FiArrowRight } from "react-icons/fi";
import Max from "../../assets/max.jpg";
import WoodyBg from "../../assets/wooden.png";

const OurTeam: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? teamData : teamData.slice(0, 6);
  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="my-24 px-8">
      <div className="relative overflow-hidden max-w-[1320px] mx-auto bg-[#FBEADC] text-[#165620] py-16 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url(${WoodyBg})` }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#165620] text-center font-medium leading-tight uppercase mb-8">
            Our Team{" "}
          </h2>
          <p className="text-md md:text-xl lg:text-2xl font-extralight mb-12 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{" "}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full">
            {visibleMembers.map((member) => (
              <li
                key={member.id}
                className="bg-[#FFF6EE] text-[#165620] border border-[#cc7e6b79] p-6"
              >
                <div className="w-[5rem] rounded-full overflow-hidden mb-4 border border-[#CC7F6B]">
                  <img src={Max} alt="profile photo" />
                </div>
                <h3 className="font-medium">
                  {member.name} from {member.country}
                </h3>
                <p className="max-w-56 mb-6 font-extralight leading-tight">
                  {member.role}
                </p>

                <a
                  className="text-[#CC7F6B] text-xs uppercase flex items-center gap-2"
                  href={`${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                  title={`Read more about ${member.name}`}
                >
                  <p>Read more</p>
                  <FiArrowRight />
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={handleViewAll}
            className="bg-[#165620] text-sm uppercase border border-[#FFF6EE]  text-white self-center flex gap-2 items-center justify-center py-3 px-8 cursor-pointer"
          >
            View All
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
