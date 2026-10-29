import React from "react";
import BannerPng from "../../assets/banner2.png";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Banner2 = ({ togglePlay }) => {
  return (
    <section className="py-16 sm:py-24 relative bg-darker">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content — appears first on mobile, but visually left on desktop */}
          <div className="order-2 lg:order-1 lg:pr-8 relative">
            <div className="relative z-10 space-y-6">
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="section-subtitle"
              >
                Social VR
              </span>
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="section-title text-white"
              >
                Play Together Across{" "}
                <span className="gradient-text">Virtual Worlds</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-white/60 leading-relaxed text-lg max-w-md"
              >
                Team up with friends in co-op adventures, attend live concerts
                in virtual arenas, or simply hang out in a zero-gravity lounge.
                The metaverse has no boundaries.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link to="/products" className="primary-btn">
                  Discover Worlds
                </Link>
                <button
                  onClick={togglePlay}
                  className="secondary-btn flex items-center gap-2 text-white"
                >
                  <BiPlayCircle className="text-2xl text-primary" />
                  See Demo
                </button>
              </div>
            </div>

            {/* Background glow */}
            <div className="h-[250px] w-[250px] bg-gradient-to-r from-secondary to-primary rounded-full absolute bottom-[-100px] left-0 blur-3xl opacity-20 pointer-events-none" />
          </div>

          {/* Image */}
          <div
            data-aos="fade-left"
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <img
                src={BannerPng}
                alt="Social VR gaming"
                className="w-full max-w-[420px] rounded-2xl"
              />
              <div className="absolute -inset-3 border border-secondary/20 rounded-3xl -z-10" />
              <div className="absolute -inset-6 border border-primary/10 rounded-[2rem] -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
