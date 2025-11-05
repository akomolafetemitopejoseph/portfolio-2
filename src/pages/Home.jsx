import React from "react";
import HeroSection from "../Components/HeroSection";
import Ratings from "../Components/Ratings";
import Services from "../Components/Services";
import ContactPage from "../Components/ContactPage";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <ContactPage />
      <Ratings />
    </div>
  );
};

export default Home;
