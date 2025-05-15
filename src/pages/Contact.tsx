import React from "react";
import Hero from "../components/Shared/Hero";
import Banner from "../assets/contact-us.jpg";
import ContactBody from "../components/Contact/ContactBody";
import WoodyBg from "../assets/wooden.png";

const Contact: React.FC = () => (
  <>
    <Hero title="Contact Us" imgUrl={Banner} />

    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url(${WoodyBg})`, zIndex: 99 }}
        aria-hidden="true"
      />
      <div className="relative">
        <ContactBody />
      </div>
    </div>
  </>
);

export default Contact;
