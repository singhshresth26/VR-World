import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Indie Game Developer",
    text: "VR World's latency is unreal — pun intended. I ported my game to their platform and the player feedback has been overwhelmingly positive.",
    rating: 5,
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    role: "VR Enthusiast",
    text: "I've tried every headset on the market. The Explorer X1 paired with VR World's library is the best bang-for-buck experience, hands down.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Ravi Patel",
    role: "Arcade Owner, Mumbai",
    text: "The Enterprise plan runs our 12-station arcade flawlessly. Their support team even helped us customise the lobby UI for our brand.",
    rating: 4,
    initials: "RP",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-darker relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <span data-aos="fade-up" className="section-subtitle block">
            Testimonials
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="section-title text-white"
          >
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="testimonial-card glass-card p-7 relative"
            >
              <FaQuoteRight className="absolute top-6 right-6 text-2xl text-white/5" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <FaStar
                    key={j}
                    className={`text-sm ${
                      j < t.rating ? "text-yellow-400" : "text-white/10"
                    }`}
                  />
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder with initials */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
