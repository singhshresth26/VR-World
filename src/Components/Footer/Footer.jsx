import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import Logo from "../../assets/logo.png";

const QuickLinks = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/products" },
  { title: "Pricing", link: "/pricing" },
  { title: "Contact", link: "/contact" },
];

const SupportLinks = [
  { title: "Help Centre", link: "/contact" },
  { title: "Community Forums", link: "#community" },
  { title: "Developer SDK", link: "#developers" },
  { title: "System Status", link: "#status" },
];

const LegalLinks = [
  { title: "Privacy Policy", link: "#privacy" },
  { title: "Terms of Service", link: "#terms" },
  { title: "Cookie Policy", link: "#cookies" },
  { title: "Accessibility", link: "#accessibility" },
];

const socialPlatforms = [
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/vrworld" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/vrworld" },
  { name: "Twitter / X", icon: FaTwitter, href: "https://twitter.com/VRWorldOfficial" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/vrworld" },
  { name: "YouTube", icon: FaYoutube, href: "https://youtube.com/@VRWorldOfficial" },
];

const Footer = () => {
  return (
    <footer className="bg-dark/80 border-t border-white/5 mt-0" role="contentinfo">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5" aria-label="VR World Home">
              <img
                src={Logo}
                alt="VR World brand logo"
                width="40"
                height="40"
                loading="lazy"
                className="h-10 w-auto"
              />
              <span className="text-xl text-white font-bold tracking-tight">
                VR <span className="gradient-text">World</span>
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed text-sm max-w-xs">
              Building the future of immersive entertainment. Our mission is
              to make virtual reality accessible, social, and unforgettable.
            </p>

            {/* Contact info */}
            <address className="space-y-2.5 text-sm text-white/50 not-italic">
              <div className="flex items-center gap-2.5">
                <HiLocationMarker className="text-primary shrink-0" aria-hidden="true" />
                <span>HITEC City, Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiPhone className="text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <HiMail className="text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:hello@vrworld.com" className="hover:text-primary transition-colors">
                  hello@vrworld.com
                </a>
              </div>
            </address>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1" aria-label="Social media profiles">
              {socialPlatforms.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow VR World on ${name}`}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white/50 hover:text-primary transition-all duration-300"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {QuickLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="text-sm text-white/40 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Footer support links">
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Support
            </h3>
            <ul className="space-y-2.5">
              {SupportLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="text-sm text-white/40 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Footer legal links">
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {LegalLinks.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="text-sm text-white/40 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} VR World. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Crafted with passion for the metaverse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
