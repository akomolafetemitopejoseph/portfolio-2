import React from "react";
import HeroSection from "../Components/HeroSection";
import Ratings from "../Components/Ratings";
import Services from "../Components/Services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Ratings />
    </div>
  );
};

export default Home;
