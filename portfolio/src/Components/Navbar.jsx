// components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink, Events, scroller } from "react-scroll";

const navItems = ["Home", "About", "Work", "Education", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    Events.scrollEvent.register("end", () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    });

    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    scroller.scrollTo(id, {
      duration: 500,
      smooth: true,
      offset: -80,
    });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#555555]/80 backdrop-blur-md border border-white/10 shadow-lg rounded-full px-6 py-3 z-50 gap-6">
        {navItems.map((item) => (
          <ScrollLink
            key={item}
            to={item}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className={`text-sm px-3 py-1.5 rounded-full transition-all duration-300 text-[#F8F4FF] cursor-pointer flex justify-center items-center ${
              activeSection === item ? "bg-[#848482]" : ""
            } hover:bg-white/10`}
            onSetActive={() => setActiveSection(item)}
          >
            {item}
          </ScrollLink>
        ))}
      </nav>

      {/* Burger Icon */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-[#1e1e1e]/80 backdrop-blur-md border border-white/10 shadow-lg rounded-lg text-white"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-[#1e1e1e]/80 backdrop-blur-lg z-50 shadow-lg px-6 py-6 flex flex-col gap-5 transition-all duration-300 rounded-l-2xl">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-white text-xl mb-4"
          >
            <FiX size={24} />
          </button>
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`text-left text-white text-base px-2 py-2 rounded-md transition cursor-pointer ${
                activeSection === item ? "bg-white/10" : ""
              } hover:bg-white/10`}
              onClick={() => scrollToSection(item)}
              onSetActive={() => setActiveSection(item)}
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
