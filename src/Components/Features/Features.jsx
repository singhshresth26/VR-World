import React from "react";
import { FaGamepad, FaShieldAlt, FaVrCardboard, FaBolt, FaUsers, FaCloudDownloadAlt } from "react-icons/fa";

const FeaturesData = [
  {
    name: "Immersive Gaming",
    icon: <FaGamepad className="text-4xl" />,
    description:
      "Hand-tracking, full-body avatars, and haptic feedback for games that feel real.",
    aosDelay: "0",
  },
  {
    name: "Secure Platform",
    icon: <FaShieldAlt className="text-4xl" />,
    description:
      "End-to-end encryption and parental controls keep your data and family safe.",
    aosDelay: "100",
  },
  {
    name: "6DoF Tracking",
    icon: <FaVrCardboard className="text-4xl" />,
    description:
      "Six degrees of freedom let you walk, duck, and lean — just like the real world.",
    aosDelay: "200",
  },
  {
    name: "Ultra-Low Latency",
    icon: <FaBolt className="text-4xl" />,
    description:
      "Under 20 ms motion-to-photon ensures zero nausea and buttery-smooth visuals.",
    aosDelay: "300",
  },
  {
    name: "Social Multiplayer",
    icon: <FaUsers className="text-4xl" />,
    description:
      "Invite friends into any experience — watch, build, and play together in real time.",
    aosDelay: "400",
  },
  {
    name: "Cloud Library",
    icon: <FaCloudDownloadAlt className="text-4xl" />,
    description:
      "Thousands of VR titles available instantly — no downloads, no waiting.",
    aosDelay: "500",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-darker relative overflow-hidden" aria-label="Key platform features">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span
            data-aos="fade-up"
            className="section-subtitle block"
          >
            Why VR World
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="section-title text-white"
          >
            Built for the{" "}
            <span className="gradient-text">Future of Play</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-white/50 max-w-xl mx-auto text-lg"
          >
            Everything you need for the ultimate virtual reality experience,
            all in one platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FeaturesData.map((data, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="feature-card glass-card p-8 group cursor-default"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform duration-300">
                  {data.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {data.name}
                </h3>
                <p className="text-white/50 leading-relaxed text-[15px]">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
