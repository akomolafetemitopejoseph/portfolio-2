import React from "react";
import HeroSection from "../Components/HeroSection";
import Ratings from "../Components/Ratings";
import Services from "../Components/Services";
import ContactPage from "../Components/ContactPage";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Skills />
      <ContactPage />

      <Ratings />
    </div>
  );
};

export default Home;
