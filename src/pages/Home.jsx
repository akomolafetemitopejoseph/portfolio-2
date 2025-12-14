import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import Ratings from "../Components/Ratings";
import Services from "../Components/Services";
import ContactPage from "../Components/ContactPage";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, {});
  return (
    <div>
      <HeroSection />
      <Services />
      <Skills />
      <Work />
      <Ratings />
      <ContactPage />
    </div>
  );
};

export default Home;
