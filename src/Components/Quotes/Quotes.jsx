import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Quotes = () => {
  return (
    <section className="relative py-20 bg-darker overflow-hidden">
      {/* Subtle gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container px-4">
        <div
          data-aos="zoom-in"
          className="max-w-3xl mx-auto text-center relative"
        >
          <FaQuoteLeft className="text-3xl text-primary/20 mx-auto mb-6" aria-hidden="true" />
          <blockquote
            cite="https://www.ted.com/speakers/chris_milk"
            className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 leading-snug font-parisienne tracking-wide"
          >
            "Virtual reality is a medium, a means by which humans can share
            ideas and experiences."
          </blockquote>
          <cite className="mt-6 text-white/40 text-sm font-medium tracking-widest uppercase block not-italic">
            — Chris Milk, VR Filmmaker
          </cite>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
    </section>
  );
};

export default Quotes;
