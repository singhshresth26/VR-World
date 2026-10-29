import React from "react";
import HeroPng from "../../assets/hero.png";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = ({ togglePlay }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-darker grid-pattern">
      {/* Radial glow overlay */}
      <div className="absolute inset-0 radial-overlay pointer-events-none" />

      <div className="container relative z-10 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-7">
            <div data-aos="fade-up">
              <span className="section-subtitle">Next-Gen VR Platform</span>
            </div>
            <h1 data-aos="fade-up" data-aos-delay="100" className="section-title text-white">
              Step Into Worlds{" "}
              <span className="gradient-text">Beyond Imagination</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg text-white/60 leading-relaxed max-w-lg"
            >
              Explore breathtaking virtual landscapes, compete in immersive
              games, and connect with friends across the metaverse — all from
              the comfort of your living room.
            </p>

            {/* Stats row */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex gap-8 py-2"
            >
              <div className="stat-item pr-8">
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-sm text-white/40 mt-0.5">Active Players</p>
              </div>
              <div className="stat-item pr-8">
                <p className="text-2xl font-bold text-white">200+</p>
                <p className="text-sm text-white/40 mt-0.5">VR Experiences</p>
              </div>
              <div className="stat-item">
                <p className="text-2xl font-bold text-white">4.9★</p>
                <p className="text-sm text-white/40 mt-0.5">User Rating</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/products" className="primary-btn">
                Explore Products
              </Link>
              <button
                onClick={togglePlay}
                className="secondary-btn flex items-center gap-2 text-white"
              >
                <BiPlayCircle className="text-2xl text-primary" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative"
            >
              <img
                src={HeroPng}
                alt="VR Headset"
                className="w-full max-w-md lg:max-w-lg animate-float drop-shadow-[0_20px_50px_rgba(0,194,255,0.25)]"
              />
              {/* Glow ring behind headset */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Blob */}
      <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper opacity-40" />
    </section>
  );
};

export default Hero;
