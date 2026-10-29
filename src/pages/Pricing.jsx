import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import SEO from "../Components/SEO/SEO";
import AOS from "aos";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for trying out VR World basics.",
    popular: false,
    features: [
      { text: "5 free VR experiences", included: true },
      { text: "720p streaming", included: true },
      { text: "Community forums", included: true },
      { text: "Single-player only", included: true },
      { text: "Multiplayer access", included: false },
      { text: "Cloud saves", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    description: "For enthusiasts who want the full experience.",
    popular: true,
    features: [
      { text: "Unlimited VR experiences", included: true },
      { text: "4K streaming", included: true },
      { text: "Community forums", included: true },
      { text: "Multiplayer access", included: true },
      { text: "Cloud saves", included: true },
      { text: "Monthly exclusive titles", included: true },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "₹4,999",
    period: "/month",
    description: "For teams, studios, and VR arcades.",
    popular: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "8K streaming", included: true },
      { text: "Up to 50 user seats", included: true },
      { text: "Custom branding", included: true },
      { text: "API access", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority support (24/7)", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Absolutely. Upgrade or downgrade your plan from your dashboard — changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes! Every new account gets a 14-day free Pro trial. No credit card required.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, UPI, net banking, and PayPal.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a full refund within the first 7 days if you're not satisfied. No questions asked.",
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    },
    {
      "@type": "Product",
      "name": "VR World Subscriptions",
      "description": "Flexible virtual reality access plans from free trial to Pro 4K gaming and Enterprise arcade licences.",
      "offers": plans.map((plan) => ({
        "@type": "Offer",
        "name": `${plan.name} Plan`,
        "priceCurrency": "INR",
        "price": plan.price === "Free" ? "0" : plan.price.replace(/[^0-9]/g, ""),
        "description": plan.description,
        "availability": "https://schema.org/InStock",
      })),
    },
  ],
};

const Pricing = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-darker min-h-screen page-enter">
      <SEO
        title="VR Subscription Plans & Membership Pricing | VR World"
        description="Affordable VR membership tiers: Starter (Free), Pro (₹999/mo) with unlimited 4K multiplayer titles, and Enterprise arcade solutions."
        keywords="VR membership, VR subscription pricing, VR game pass price, virtual reality cost, VR arcade pricing"
        canonical="https://vrworld.com/pricing"
        jsonLd={pricingSchema}
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
        <div className="absolute inset-0 radial-overlay pointer-events-none" />
        <div className="container relative z-10 text-center">
          <span data-aos="fade-up" className="section-subtitle block">
            Simple Pricing
          </span>
          <h1 data-aos="fade-up" data-aos-delay="100" className="section-title text-white">
            Plans That Scale{" "}
            <span className="gradient-text">With You</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 text-white/50 max-w-xl mx-auto text-lg"
          >
            Whether you're a casual explorer or running a full VR arcade,
            we've got a plan that fits.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container -mt-4 pb-20" aria-label="Subscription tiers">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`rounded-2xl p-8 relative ${
                plan.popular
                  ? "pricing-popular animate-pulse-glow"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-primary to-secondary text-white">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-8">
                <h2 className="text-lg font-semibold text-white/80 mb-1">
                  {plan.name}
                </h2>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-white/40 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-white/40 text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8" aria-label={`${plan.name} features`}>
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {feat.included ? (
                      <FaCheck className="text-primary shrink-0" aria-hidden="true" />
                    ) : (
                      <FaTimes className="text-white/20 shrink-0" aria-hidden="true" />
                    )}
                    <span
                      className={
                        feat.included ? "text-white/70" : "text-white/30"
                      }
                    >
                      {feat.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center rounded-full py-2.5 font-medium text-sm transition-all duration-300 ${
                  plan.popular
                    ? "primary-btn"
                    : "border border-white/20 text-white hover:bg-white/10"
                }`}
                aria-label={`Choose ${plan.name} plan`}
              >
                {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container pb-20 max-w-2xl" aria-label="Frequently Asked Questions">
        <div className="text-center mb-12">
          <span data-aos="fade-up" className="section-subtitle block">
            FAQ
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-1 focus:ring-primary/50"
                aria-expanded={openFaq === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-medium text-white/80 text-[15px]">
                  {faq.q}
                </span>
                <span
                  className={`text-primary text-xl transition-transform duration-300 ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div id={`faq-answer-${i}`} className="px-5 pb-5 -mt-1">
                  <p className="text-white/50 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
