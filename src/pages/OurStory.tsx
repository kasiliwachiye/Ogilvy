import React from "react";
import Hero from "../components/Shared/Hero";
import WhoWeAre from "../components/OurStory/WhoWeAre";
import WhatWeDo from "../components/OurStory/WhatWeDo";
import OurTeam from "../components/OurStory/OurTeam";
import AdvisoryBoard from "../components/OurStory/AdvisoryBoard";
import OurPartnersMain from "../components/OurStory/OurPartners";
import NewsUpdate from "../components/OurStory/NewsUpdate";
import Banner from "../assets/our-story-hero.jpg";

const OurStory: React.FC = () => (
  <>
    <Hero title="Our Story" imgUrl={Banner} />
    <WhoWeAre />
    <WhatWeDo />
    <OurTeam />
    <AdvisoryBoard />
    <OurPartnersMain />
    <NewsUpdate />
  </>
);

export default OurStory;
