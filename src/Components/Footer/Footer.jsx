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
  { title: "Help Centre", link: "#" },
  { title: "Community", link: "#" },
  { title: "Developers", link: "#" },
  { title: "Status", link: "#" },
];

const LegalLinks = [
  { title: "Privacy Policy", link: "#" },
  { title: "Terms of Service", link: "#" },
  { title: "Cookie Policy", link: "#" },
  { title: "Accessibility", link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-dark/80 border-t border-white/5 mt-0">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={Logo} alt="VR World" className="h-10" />
              <span className="text-xl text-white font-bold tracking-tight">
                VR <span className="gradient-text">World</span>
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed text-sm max-w-xs">
              Building the future of immersive entertainment. Our mission is
              to make virtual reality accessible, social, and unforgettable.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 text-sm text-white/50">
              <div className="flex items-center gap-2.5">
                <HiLocationMarker className="text-primary shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiPhone className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HiMail className="text-primary shrink-0" />
                <span>hello@vrworld.com</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 flex items-center justify-center text-white/50 hover:text-primary transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Navigation
            </h4>
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
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Support
            </h4>
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
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Legal
            </h4>
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
          </div>
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
