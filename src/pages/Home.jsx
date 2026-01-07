import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import Services from "../Components/Services";
import ContactPage from "../Components/ContactPage";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Aos from "aos";
import "aos/dist/aos.css";
import { InfiniteMovingCards } from "../components3/infinite-moving-cards";
import { FloatButton } from "antd";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Services />
      <Skills />
      <Work />
      <InfiniteMovingCards />
      <ContactPage />
      <FloatButton.BackTop />
    </div>
  );
};

export default Home;
