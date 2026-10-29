import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import PopupPlayer from "./Components/PopupPlayer/PopupPlayer";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-out-cubic",
      delay: 0,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-darker text-white font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage togglePlay={togglePlay} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        {/* Video Player Overlay */}
        <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
      </div>
    </Router>
  );
};

export default App;
