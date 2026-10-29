import React, { useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import Quotes from "../Components/Quotes/Quotes";
import Banner from "../Components/Banner/Banner";
import Banner2 from "../Components/Banner/Banner2";
import Features from "../Components/Features/Features";
import Testimonials from "../Components/Testimonials/Testimonials";
import AppStore from "../Components/AppStore/AppStore";
import SEO from "../Components/SEO/SEO";
import AOS from "aos";

const HomePage = ({ togglePlay }) => {
  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-enter">
      <SEO
        title="VR World — Immersive Virtual Reality, Games & Metaverse Experiences"
        description="Step into the future with VR World. Discover ultra-responsive VR headsets, immersive 360° movies, multiplayer games, and virtual reality experiences."
        keywords="VR World, virtual reality platform, metaverse, VR games, 6DoF headsets, VR movies, spatial audio"
        canonical="https://vrworld.com/"
      />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <Testimonials />
      <AppStore />
    </main>
  );
};

export default HomePage;
