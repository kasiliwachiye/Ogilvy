import React from "react";
import GovOfMalawi from "../../assets/partner-1.png";
import Loowatt from "../../assets/partner-2.png";
import Envirofit from "../../assets/partner-3.png";
import Agricane from "../../assets/partner-4.png";
import Bboxx from "../../assets/partner-5.png";

const partners = [
  {
    logo: GovOfMalawi,
    name: "The Government of Malawi & CDI",
    description:
      "This is chaired by H.E. Joyce Banda, who has dedicated her life to works that establish rural transformation in Africa.",
  },
  {
    logo: Loowatt,
    name: "Loowatt",
    description:
      "Because water access is a common issue faced in the areas we work in, we partnered with a company that offers waterless home sanitation solutions meeting WHO health guidelines.",
  },
  {
    logo: Agricane,
    name: "Agricane",
    description:
      "This is a non-profit organization. Envirofit is the world’s leading manufacturer of clean, efficient cookstoves that save on money and fuel.",
  },
  {
    logo: Envirofit,
    name: "Envirofit",
    description:
      "We partnered with the leading pan-African agriculture management company to ensure the productivity of the fruit tree gardens with access to their international markets.",
  },
  {
    logo: Bboxx,
    name: "Bboxx",
    description:
      "We sought the services of the leading global supplier of PAYG solar home systems for affordable energy solutions for our houses.",
  },
];

const OurPartners: React.FC = () => (
  <section className="my-24 px-8">
    <div className="max-w-[1320px] mx-auto bg-[#FBEADC] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#165620] font-medium leading-tight uppercase mb-8">
          Our Partners
        </h2>
        <p className="md:text-xl font-extralight mb-12">
          Instead of implementing a single component of a solution across
          multiple communities, as has been done in the past, we focus on
          delivering an integrated economic system to a community to help lift
          it to a sustainable minimum standard of living from which it can grow
          and progress independently. We have therefore identified and made
          collaborative efforts with organizations that share our vision and
          help steer it forward.
        </p>

        <ul className="divide-y-2 divide-[#16562083] mb-16 text-2xl font-extralight">
          {partners.map(({ logo, name, description }) => (
            <li
              key={name}
              className="
                relative
                grid grid-cols-[1fr_4fr]
                items-center
                before:content-['']
                before:absolute
                before:top-0
                before:bottom-0
                before:left-[20%]
                before:border-l-2
                before:border-[#16562083]
              "
            >
              <div className="md:px-8 flex items-center justify-center">
                <img src={logo} alt={name} />
              </div>
              <div className="p-12">
                <h3 className="mb-2 text-[#165620] text-sm md:text-md lg:text-xl font-medium">
                  {name}
                </h3>
                <p className=" text-sm md:text-md lg:text-xl">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="md:text-xl font-extralight mb-8">
          In future we hope to collaborate with delivery partners such as
          Adelphi, J&J, and Westfalia Fruit; with the financial backing of
          recognized financial institutions such as TDB, Standard Bank,
          Rockefeller Foundation, World Bank IFC, AgDevCo, and World Bank IBRD.
        </p>
        <p className="md:text-xl font-extralight mb-12">
          Our most critical partners are the communities we hope to transform,
          and it is only by working in partnership with local leaders and our
          future residents that we will pilot, test and refine a model that
          truly works for them.
        </p>
      </div>
    </div>
  </section>
);

export default OurPartners;
