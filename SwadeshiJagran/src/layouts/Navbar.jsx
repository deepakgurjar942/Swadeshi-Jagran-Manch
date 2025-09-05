// src/layouts/Navbar.js
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaUserPlus
} from "react-icons/fa";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown !== dropdownName) {
      setActiveDropdown(dropdownName);
    } else {
      setActiveDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isHomePage && !scrolled
          ? "bg-transparent"
          : "bg-black backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo left, Socials + Contact/Join right */}
        <div className="flex items-center justify-between py-3">
          <div className="flex-shrink-0">
            <Link to="/home" className="flex items-center">
              <img
                src="https://www.swadeshionline.in/assets/images/logos.png"
                alt="Logo"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Social + Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="https://facebook.com" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-blue-400">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-pink-400">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-red-400">
                <FaYoutube />
              </a>
              <a href="https://linkedin.com" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-blue-500">
                <FaLinkedin />
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <Link
                to="/contact"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md"
              >
                Contact
              </Link>
              <Link
                to="/join"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md flex items-center"
              >
                <FaUserPlus className="mr-1" /> Join
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-amber-400 bg-amber-500/10"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center mt-2 pb-2">
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full p-1 border border-amber-500/20 max-w-4xl w-full">
            <Link
              to="/home"
              className={`px-4 py-2 rounded-full ${
                location.pathname === "/home"
                  ? "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-amber-500/20"
              }`}
            >
              Home
            </Link>
            <AboutDropdown
              isActive={activeDropdown === "about"}
              toggle={() => toggleDropdown("about")}
            />
            <StandOnIssueDropdown
              isActive={activeDropdown === "issues"}
              toggle={() => toggleDropdown("issues")}
            />
            <ResourcesDropdown
              isActive={activeDropdown === "resources"}
              toggle={() => toggleDropdown("resources")}
            />
            <PublicationDropdown
              isActive={activeDropdown === "publications"}
              toggle={() => toggleDropdown("publications")}
            />
            <GalleryDropdown
              isActive={activeDropdown === "gallery"}
              toggle={() => toggleDropdown("gallery")}
            />
            <MonographDropdown
              isActive={activeDropdown === "monograph"}
              toggle={() => toggleDropdown("monograph")}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md px-4 py-6 rounded-lg space-y-4">
            <Link
              to="/home"
              onClick={closeMenu}
              className="block text-center text-white text-lg font-medium py-2"
            >
              Home
            </Link>

            {/* Mobile Dropdowns */}
            <AboutDropdown
              mobile
              isActive={activeDropdown === "about"}
              toggle={() => toggleDropdown("about")}
            />
            <StandOnIssueDropdown
              mobile
              isActive={activeDropdown === "issues"}
              toggle={() => toggleDropdown("issues")}
            />
            <ResourcesDropdown
              mobile
              isActive={activeDropdown === "resources"}
              toggle={() => toggleDropdown("resources")}
            />
            <PublicationDropdown
              mobile
              isActive={activeDropdown === "publications"}
              toggle={() => toggleDropdown("publications")}
            />
            <GalleryDropdown
              mobile
              isActive={activeDropdown === "gallery"}
              toggle={() => toggleDropdown("gallery")}
            />
            <MonographDropdown
              mobile
              isActive={activeDropdown === "monograph"}
              toggle={() => toggleDropdown("monograph")}
            />

            {/* Mobile Socials */}
            <div className="flex justify-center space-x-3 pt-4">
              <FaFacebook className="text-white" />
              <FaTwitter className="text-white" />
              <FaInstagram className="text-white" />
              <FaYoutube className="text-white" />
              <FaLinkedin className="text-white" />
            </div>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full text-center py-2 rounded-full bg-amber-500 text-white"
              >
                Contact
              </Link>
              <Link
                to="/join"
                onClick={closeMenu}
                className="w-full text-center py-2 rounded-full bg-green-500 text-white flex items-center justify-center"
              >
                <FaUserPlus className="mr-2" /> Join
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
