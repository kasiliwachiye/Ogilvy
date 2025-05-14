import React from "react";
import Hero from "../components/SustainableLiving/Hero";
import About from "../components/SustainableLiving/About";
import ProductIntro from "../components/SustainableLiving/ProductIntro";
import FeatureCarousel from "../components/SustainableLiving/FeatureCarousel";
import Partners from "../components/Shared/Partners";

const SustainableLiving: React.FC = () => (
  <>
    <Hero />
    <About />
    <ProductIntro />
    <FeatureCarousel />
    <Partners />
  </>
);

export default SustainableLiving;
