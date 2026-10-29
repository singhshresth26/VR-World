import React, { useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import Quotes from "../Components/Quotes/Quotes";
import Banner from "../Components/Banner/Banner";
import Banner2 from "../Components/Banner/Banner2";
import Features from "../Components/Features/Features";
import Testimonials from "../Components/Testimonials/Testimonials";
import AppStore from "../Components/AppStore/AppStore";
import AOS from "aos";

const HomePage = ({ togglePlay }) => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter">
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <Testimonials />
      <AppStore />
    </div>
  );
};

export default HomePage;
