import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <section className="py-20 bg-darker relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-primary/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div
          data-aos="fade-up"
          className="glass-card max-w-3xl mx-auto p-10 sm:p-14 text-center"
        >
          <span className="section-subtitle block">Get the App</span>
          <h2 className="section-title text-white mt-2">
            Start Your VR Journey{" "}
            <span className="gradient-text">Today</span>
          </h2>
          <p className="mt-5 text-white/50 max-w-md mx-auto text-lg leading-relaxed">
            Download the VR World companion app to browse experiences,
            manage your library, and connect with friends — even when
            you're away from your headset.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap justify-center gap-5 mt-8"
          >
            <a
              href="#appstore"
              aria-label="Download VR World companion app on Apple App Store"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src={AppStoreImg}
                alt="Download VR World companion app on Apple App Store"
                loading="lazy"
                width="160"
                height="48"
                className="h-12 sm:h-14 w-auto"
              />
            </a>
            <a
              href="#playstore"
              aria-label="Get VR World companion app on Google Play Store"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src={PlayStoreImg}
                alt="Get VR World companion app on Google Play Store"
                loading="lazy"
                width="160"
                height="48"
                className="h-12 sm:h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;
