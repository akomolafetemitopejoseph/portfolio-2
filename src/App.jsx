import React from "react";
import NavBar from "./Components/NavBar";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import { style } from "motion/react-client";

function App() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 via-neutral-700 to-stone-900 font-family font-optical-sizing font-style">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
