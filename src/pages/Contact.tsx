import React from "react";
import Hero from "../components/Shared/Hero";
import Banner from "../assets/contact-us.jpg";
import ContactBody from "../components/Contact/ContactBody";

const Contact: React.FC = () => (
  <>
    <Hero title="Contact Us" imgUrl={Banner} />
    <ContactBody />
  </>
);

export default Contact;
