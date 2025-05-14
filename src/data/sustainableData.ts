import type { ComponentType, SVGProps } from "react";
import SolarImg from "../assets/solar-power.png";
import WaterlessToiletsImg from "../assets/waterless-toilets.png";
import MortgageImg from "../assets/low-cost-mortgage.png";
import GardenImg from "../assets/garden-to-plant-trees.png";
import StoveImg from "../assets/clean-efficient-cook-stove.png";
import InternetImg from "../assets/internet-access-device.png";
import Partner1 from "../assets/partner-1.png";
import Partner2 from "../assets/partner-2.png";
import Partner3 from "../assets/partner-3.png";
import Partner4 from "../assets/partner-4.png";
import { FiSun, FiWifi } from "react-icons/fi";
import { GiTreeBranch, GiCookingPot } from "react-icons/gi";
import { AiOutlineDollar } from "react-icons/ai";
import { TbToiletPaper } from "react-icons/tb";
import HeroSustainableBgImg from "../assets/hero-sustainable-bg.png";
import SustainableIllustrationImg from "../assets/sustainable-illustration.png";
import SustainableIllustrationSmallImg from "../assets/sustainable-illustration-small.png";

export const heroData = {
  title: "SUSTAINABLE LIVING",
  bgImage: HeroSustainableBgImg,
};

export const aboutData = {
  title: "ABOUT SUSTAINABLE LIVING",
  paragraphs: [
    `Aid that isn’t accompanied by a strategy for long-term sustainability is certain to fail. Driven by the desire to create lasting change from self-sustainable economies on the ground, we invented the iRise Homes building system and a corresponding economic development model. Each home comes plugged with amenities that allow for a pragmatic and dignified lifestyle, as well as a fruit garden to be tended for income generation.`,
    `Beyond providing people with the fundamental elements to achieve a basic living standard, that is food, shelter, energy and basic income, Future Earth is leveraging on technology to provide them with tools for ongoing development and as a result, financial sustainability. We provide a technology platform that enables mortgage provisions and monthly pay-as-you-go payments on mobile. An internet device is also plugged into the home, allowing its occupants to engage in the global knowledge and “gig” economy.`,
  ],
  illustration: SustainableIllustrationImg,
  smallIllustration: SustainableIllustrationSmallImg,
};

export const productIntroData = {
  title: "PRODUCT INTRODUCTION",
  subtitle:
    "To enable “self-development” at scale so as to break the poverty cycle, Future Earth found its solution in the iRise Homes™ & Gardens initiative.",
  description:
    "Future Earth builds affordable houses and delivers them with a variety of facilities that provide families the basic requirements and the tools for self-development.",
};

export type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  image: string;
};

export const features: Feature[] = [
  {
    icon: FiSun,
    title: "Solar Power",
    description:
      "Basic access to electricity improves safety, security, and productivity while reducing household expenses for lighting sources.",
    image: SolarImg,
  },
  {
    icon: TbToiletPaper,
    title: "Waterless Toilets",
    description:
      "Eco-friendly sanitation that conserves water and safely processes waste on-site, reducing disease and contamination.",
    image: WaterlessToiletsImg,
  },
  {
    icon: AiOutlineDollar,
    title: "Low-Cost Mortgage",
    description:
      "Flexible, pay-as-you-go mortgage plans allow families to acquire assets without crippling upfront costs.",
    image: MortgageImg,
  },
  {
    icon: GiTreeBranch,
    title: "Garden to Plant Trees",
    description:
      "Home-based micro-gardens boost food security, restore soil health, and generate income through surplus sales.",
    image: GardenImg,
  },
  {
    icon: GiCookingPot,
    title: "Clean, Efficient Cook-Stove",
    description:
      "Reduced smoke inhalation and improved fuel efficiency support health and lower cooking costs.",
    image: StoveImg,
  },
  {
    icon: FiWifi,
    title: "Internet Access Device",
    description:
      "High-speed connectivity plugged into every home opens doors to education, markets, and remote work.",
    image: InternetImg,
  },
];

export const partners = [Partner1, Partner2, Partner3, Partner4];
