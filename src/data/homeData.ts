import House1 from "../assets/house.png";
import ZeroCarbonHousing from "../assets/zero-carbon-housing.png";
import CircularEconomies from "../assets/circular-economies.png";
import Partner1 from "../assets/partner-1.png";
import Partner2 from "../assets/partner-2.png";
import Partner3 from "../assets/partner-3.png";
import Partner4 from "../assets/partner-4.png";

export type Slide = {
  title: string;
  body: string;
  img: string;
};

export const slides: Slide[] = [
  {
    title: "OUR VISION & PROMISE",
    body: "Our vision is to create self-sustaining, thriving communities in rural Africa and other marginalized parts of the world by introducing a model that allows for mass-scale “self-development”.",
    img: House1,
  },
  {
    title: "ZERO-CARBON HOUSING",
    body: "Each Rise-Home uses local bamboo and off-grid solar so families thrive without burdening the planet.",
    img: ZeroCarbonHousing,
  },
  {
    title: "CIRCULAR ECONOMIES",
    body: "We bootstrap village-scale recycling & micro-financing loops, turning waste streams into incomes.",
    img: CircularEconomies,
  },
];

export const partners: string[] = [Partner1, Partner2, Partner3, Partner4];

export const benefits: string[] = [
  "The iRise housing structure can be mass-manufactured affordably.",
  "The house is portable to maintain resale value and make the house financially viable.",
  "The houses can be easily and quickly assembled on-site by inexperienced women and youth.",
];
