import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import Loader from "./Components/Loader";
import { div } from "motion/react-client";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000); // 6 seconds loading
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div
            className=" min-h-screen
    bg-[url('/background.jpg')]
    bg-cover
    bg-center
    bg-no-repeat"
          >
            <ToastContainer />
            <NavBar />
            <Home />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
