import React from "react";
import Hero from "./Hero";
import HouseDesign from "./HouseDesign";
import Benefits from "./Benefits";
import Pathway from "./Pathway";
import Projects from "./Projects";
import Partners from "../Shared/Partners";

const Home: React.FC = () => (
  <>
    <Hero />
    <HouseDesign />
    <Benefits />
    <Pathway />
    <Partners />
    <Projects />
  </>
);

export default Home;
