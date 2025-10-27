import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Ratings from "./Components/Ratings";

function App() {
  return (
    <div className="bg-gradient-to-tr from-slate-900 via-neutral-800 to-neutral-900">
      <NavBar />
      <HeroSection />
      <Ratings />
    </div>
  );
}

export default App;
