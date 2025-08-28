// src/layouts/Navbar.js
import React, { useEffect, useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import AboutDropdown from "../components/AboutDropdown.jsx";
import ResourcesDropdown from "../components/ResourcesDropdown";
import StandOnIssueDropdown from "../components/StandOnIssueDropdown";
import PublicationDropdown from "../components/PublicationDropdown";
import GalleryDropdown from "../components/GalleryDropdown";
import MonographDropdown from "../components/MonographDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location= useLocation();
  const isHomePage = location.pathname==="/home";
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset dropdowns when menu is toggled
    if (!isMenuOpen) setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isHomePage && !scrolled ? 'bg-transparent' : 'bg-black'}  hover:bg-black `} 
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row - Logo and Social Icons */}
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/home">
              <img
                src="https://www.swadeshionline.in/assets/images/logos.png"
                alt="Incredible India Logo"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="hidden md:flex space-x-7">
            <a href="https://facebook.com" className="text-gray-300 hover:text-blue-400">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-blue-400">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-pink-500">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-500">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
           <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-indiaSaffron focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Main menu"
            >
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom Row - Navigation and Action Buttons */}
        <div className="hidden  md:flex items-center justify-between h-12 border-t border-gray-700">
          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="flex items-baseline space-x-1">
              <Link
                to="/home"
                className="text-gray-100 hover:text-indiaSaffron px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

              <AboutDropdown />
              <StandOnIssueDropdown />
              <ResourcesDropdown />
              <PublicationDropdown />
              <GalleryDropdown />
              <MonographDropdown />
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/contact"
              className="bg-indiaSaffron text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 focus:outline-none"
            >
              Contact Us
            </Link>
            <Link
              to="/join"
              className="bg-indiaGreen text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
         
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black shadow-lg">
            <Link
              to="/home"
              className="text-gray-100 hover:text-indiaSaffron block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Mobile Dropdowns */}
            <AboutDropdown />
            <StandOnIssueDropdown />
            <ResourcesDropdown />
            <PublicationDropdown />
            <GalleryDropdown />
            <MonographDropdown />

            {/* Social Icons for Mobile */}
            <div className="flex justify-center space-x-6 py-4 border-t border-gray-700 mt-2">
              <a href="https://facebook.com" className="text-gray-300 hover:text-blue-400">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-blue-400">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-pink-500">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-500">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>

            <Link
              to="/contact"
              className="bg-indiaSaffron text-white block text-center px-4 py-2 rounded-md text-base font-medium hover:bg-orange-700 focus:outline-none"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/join"
              className="bg-indiaGreen text-white block text-center px-4 py-2 rounded-md text-base font-medium hover:bg-green-700 focus:outline-none"
              onClick={closeMenu}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;