import React from "react";
import BannerPng from "../../assets/banner1.png";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Banner = ({ togglePlay }) => {
  return (
    <section className="py-16 sm:py-24 relative bg-darker">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div data-aos="fade-right" data-aos-once="false" className="flex justify-center">
            <div className="relative">
              <img
                src={BannerPng}
                alt="VR experience showcase"
                className="w-full max-w-[420px] rounded-2xl"
              />
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-primary/20 rounded-3xl -z-10" />
              <div className="absolute -inset-6 border border-secondary/10 rounded-[2rem] -z-20" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pr-8 relative">
            <div className="relative z-10 space-y-6">
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="section-subtitle"
              >
                Cinematic VR
              </span>
              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="section-title text-white"
              >
                Experience Movies Like{" "}
                <span className="gradient-text">Never Before</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-white/60 leading-relaxed text-lg max-w-md"
              >
                Watch your favourite films in a private IMAX-sized theatre.
                Spatial audio and 180° projection make every scene feel
                like you're living inside the story.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link to="/products" className="primary-btn">
                  Browse Library
                </Link>
                <button
                  onClick={togglePlay}
                  className="secondary-btn flex items-center gap-2 text-white"
                >
                  <BiPlayCircle className="text-2xl text-primary" />
                  Watch Trailer
                </button>
              </div>
            </div>

            {/* Background glow */}
            <div className="h-[250px] w-[250px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] right-0 blur-3xl opacity-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
