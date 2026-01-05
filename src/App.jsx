import React from "react";
import NavBar from "./Components/NavBar";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
// import { style } from "motion/react-client";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div
      className="font-family font-optical-sizing font-style bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <ToastContainer />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
