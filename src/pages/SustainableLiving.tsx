import React from "react";
import About from "../components/SustainableLiving/About";
import ProductIntro from "../components/SustainableLiving/ProductIntro";
import FeatureCarousel from "../components/SustainableLiving/FeatureCarousel";
import Partners from "../components/Shared/Partners";
import Hero from "../components/Shared/Hero";
import Banner from "../assets/hero-sustainable-bg.png";

const SustainableLiving: React.FC = () => (
  <>
    <Hero title="Sustainable Living" imgUrl={Banner} />
    <About />
    <ProductIntro />
    <FeatureCarousel />
    <Partners />
  </>
);

export default SustainableLiving;
