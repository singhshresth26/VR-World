import React, { useEffect, useState } from "react";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiClock,
} from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import SEO from "../Components/SEO/SEO";
import AOS from "aos";

const contactInfo = [
  {
    icon: <HiLocationMarker className="text-2xl" />,
    title: "Visit Experience Centre",
    lines: ["HITEC City, Hyderabad", "Telangana 500081, India"],
  },
  {
    icon: <HiPhone className="text-2xl" />,
    title: "Phone Support",
    lines: ["+91 98765 43210", "+91 12345 67890"],
  },
  {
    icon: <HiMail className="text-2xl" />,
    title: "Email Assistance",
    lines: ["hello@vrworld.com", "support@vrworld.com"],
  },
  {
    icon: <HiClock className="text-2xl" />,
    title: "Operating Hours",
    lines: ["Mon – Fri: 9 AM – 7 PM", "Sat: 10 AM – 4 PM"],
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact VR World Support & Head Office",
      "description": "Get in touch with VR World for hardware support, enterprise arcade inquiries, or to book a free VR demo.",
      "url": "https://vr-world-wine.vercel.app/contact"
    },
    {
      "@type": "LocalBusiness",
      "name": "VR World Experience Centre",
      "image": "https://vr-world-wine.vercel.app/og-image.png",
      "telephone": "+91-98765-43210",
      "email": "hello@vrworld.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "HITEC City",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500081",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.4474,
        "longitude": 78.3737
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "10:00",
          "closes": "16:00"
        }
      ]
    }
  ]
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="bg-darker min-h-screen page-enter">
      <SEO
        title="Contact Us & Experience Centres | VR World"
        description="Have questions about VR headsets, software subscriptions, or need enterprise support? Contact the VR World team in Hyderabad, India."
        keywords="contact VR World, VR headset support, book VR demo, VR experience centre Hyderabad, virtual reality inquiries"
        canonical="https://vr-world-wine.vercel.app/contact"
        jsonLd={contactSchema}
      />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-pattern">
        <div className="absolute inset-0 radial-overlay pointer-events-none" />
        <div className="container relative z-10 text-center">
          <span data-aos="fade-up" className="section-subtitle block">
            Get in Touch
          </span>
          <h1 data-aos="fade-up" data-aos-delay="100" className="section-title text-white">
            We'd Love to{" "}
            <span className="gradient-text">Hear From You</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 text-white/50 max-w-xl mx-auto text-lg"
          >
            Questions, feedback, or partnership enquiries — drop us a
            message and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container -mt-4 pb-10" aria-label="Contact channels">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="glass-card p-6 text-center hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                {info.icon}
              </div>
              <h2 className="text-white font-semibold text-sm mb-2">
                {info.title}
              </h2>
              {info.lines.map((line, j) => (
                <p key={j} className="text-white/40 text-sm">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="container py-16" aria-label="Contact form and office location">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div data-aos="fade-right" className="glass-card p-8 sm:p-10">
            <h2 className="text-xl font-bold text-white mb-6">
              Send a Message
            </h2>

            {submitted && (
              <div role="alert" className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact inquiry form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name-input" className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1.5 block">
                    Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20"
                  />
                </div>
                <div>
                  <label htmlFor="email-input" className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="form-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject-input" className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1.5 block">
                  Subject
                </label>
                <input
                  id="subject-input"
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="form-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20"
                />
              </div>
              <div>
                <label htmlFor="message-input" className="text-xs text-white/40 font-medium uppercase tracking-wider mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us more…"
                  className="form-input w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 resize-none"
                />
              </div>
              <button
                type="submit"
                className="primary-btn flex items-center gap-2 w-full justify-center"
              >
                <FaPaperPlane className="text-sm" aria-hidden="true" />
                Send Message
              </button>
            </form>
          </div>

          {/* Map / Illustration */}
          <div data-aos="fade-left" className="glass-card overflow-hidden">
            <iframe
              title="VR World Headquarters Location in Hyderabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3275232!2d78.3737!3d17.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzUxLjAiTiA3OMKwMjInMjUuMyJF!5e0!3m2!1sen!2sin!4v1699000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
