import React, { useEffect, useRef } from 'react';
import Navbar from '../../src/components/Navbar.jsx';
import Footer from './Footer.jsx';
import data from "../json/ProjectData.json";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    // "WORK" heading animation
    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.9,
        delay: 0.5,
        ease: "power4.out",
      }
    );

    // Subheading animation
    gsap.fromTo(
      subHeadingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      }
    );

    // Project cards animation (staggered)
    gsap.fromTo(
      projectsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current[0],
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-black p-8 md:p-12 font-sans relative">
        <Navbar />
        
        {/* WORK Heading */}
        <div
          ref={headingRef}
          className="max-w-8xl text-7xl md:text-[12rem] font-semibold mx-auto px-4 sm:px-6 py-12 mb-4"
        >
          WORK
        </div>

        {/* Subheading */}
        <h2
          ref={subHeadingRef}
          className="text-3xl font-medium text-right"
        >
          work 2023-2025
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <div
              className="border overflow-hidden"
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <Link
                target="_blank"
                to={`/work/${project.name}`}
                className="relative group block w-full h-full"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://placehold.co/600x600/e0e0e0/000000?text=Image+Not+Found';
                  }}
                />

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-full backdrop-brightness-75 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <h3 className="text-white text-4xl font-semibold mb-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {project.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Work;