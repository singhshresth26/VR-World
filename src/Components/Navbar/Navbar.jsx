import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/products" },
  { id: 3, name: "Pricing", link: "/pricing" },
  { id: 4, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] navbar-glass ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={Logo}
              alt="VR World logo"
              className="h-12 group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-2xl text-white tracking-tight">
              VR <span className="font-bold gradient-text">World</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NavLinks.map(({ id, name, link }) => {
                const isActive = location.pathname === link;
                return (
                  <li key={id}>
                    <Link
                      to={link}
                      className={`relative px-4 py-5 block text-[15px] font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {name}
                      {isActive && (
                        <span className="absolute bottom-3 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
              <li className="ml-4">
                <DarkMode />
              </li>
              <li className="ml-2">
                <Link
                  to="/contact"
                  className="primary-btn text-sm py-2 px-5"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <DarkMode />
            <button
              onClick={toggleMenu}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Toggle menu"
            >
              {showMenu ? (
                <HiMenuAlt1 size={28} />
              ) : (
                <HiMenuAlt3 size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <nav className="md:hidden mobile-menu-enter pb-4">
            <ul className="space-y-1 pt-2 border-t border-white/10">
              {NavLinks.map(({ id, name, link }) => {
                const isActive = location.pathname === link;
                return (
                  <li key={id}>
                    <Link
                      to={link}
                      className={`block py-2.5 px-3 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 px-3">
                <Link
                  to="/contact"
                  className="primary-btn text-sm py-2.5 px-5 block text-center"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
