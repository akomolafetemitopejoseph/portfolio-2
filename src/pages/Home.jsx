import React from "react";
import HeroSection from "../Components/HeroSection";
import Ratings from "../Components/Ratings";
import Services from "../Components/Services";
import ContactPage from "../Components/ContactPage";
import { FollowPointer } from "../Components2/Following-pointer";

const Home = () => {
  return (
    <div>
      <FollowPointer />
      <HeroSection />
      <Services />
      <ContactPage />
      <Ratings />
    </div>
  );
};

export default Home;
