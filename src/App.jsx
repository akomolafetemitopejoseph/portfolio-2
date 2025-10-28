import React from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Components/Services";

function App() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 via-neutral-700 to-stone-900">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
