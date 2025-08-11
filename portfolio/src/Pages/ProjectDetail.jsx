import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../json/ProjectData';
import Navbar from '../components/Navbar';
import { FaQuoteLeft } from "react-icons/fa";
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { projectName } = useParams();
  const project = data.find((p) => p.name === projectName);

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialRef = useRef(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black p-12 font-sans">
        <Navbar />
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  function getRandomTwo(array) {
    if (array.length < 2) return array;
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }

  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    setRandomProjects(getRandomTwo(data));
  }, []);

  // ✅ GSAP animations
  useEffect(() => {
    const fadeUp = (target, delay = 0) => {
      gsap.fromTo(
        target,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 80%',
          },
        }
      );
    };

    fadeUp(headerRef.current, 0.2);
    fadeUp(aboutRef.current, 0.1);
    fadeUp(galleryRef.current, 0.1);
    fadeUp(testimonialRef.current, 0.1);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-black p-8 md:p-12 font-sans relative">
        <Navbar />

        {/* Main container */}
        <div
          className="max-w-8xl mx-auto px-4 sm:px-6 py-12 mb-4"
          ref={headerRef}
        >
          {/* Project header */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Image */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden shadow-lg">
              <img
                src={project?.frontImage}
                alt={project?.name || 'Project Image'}
                className="w-full h-full object-center transform transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://placehold.co/800x600/e0e0e0/000000?text=Image+Not+Found';
                }}
              />
            </div>

            {/* Project Title & Year */}
            <div className="flex flex-col items-start justify-center space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl md:px-6 font-bold leading-tight">
                {project?.name}
              </h1>
              {project?.year && (
                <p className="text-sm uppercase tracking-wider text-gray-500 md:px-6">
                  Year: <span className="font-medium">{project.year}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <hr className="border border-gray-200" />

        {/* about container */}
        <div
          className="max-w-8xl mx-auto px-4 sm:px-6 py-12 mt-10"
          ref={aboutRef}
        >
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-3xl font-medium tracking-wide">about.</h2>
            <Link
              to={project?.WorkingUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300 text-lg"
            >
              See It Live
            </Link>
          </div>

          {/* About Text */}
          <div className="mt-8 ml-auto max-w-3xl ">
            <p className="text-base sm:text-lg leading-relaxed font-semibold">
              {project?.about}
            </p>
          </div>
        </div>

        <hr className="border border-gray-200" />

        {/* image Gallery */}
        <div
          className="max-w-8xl mx-auto px-4 sm:px-6 py-12 mt-10"
          ref={galleryRef}
        >
          <div className="overflow-hidden rounded-lg shadow-lg mb-2">
            <img
              src={project.sideImage[0]}
              alt="Main"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Grid for the rest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.sideImage.slice(1).map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <hr className="border border-gray-200" />

        {/* testimonial section */}
        <div
          className="max-w-8xl mx-auto px-4 sm:px-6 py-12 mt-10"
          ref={testimonialRef}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <h2 className="text-3xl font-medium tracking-wide">about.</h2>
            <Link
              to={project?.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300 text-lg"
            >
              Github
            </Link>
          </div>
          <div className="text-left sm:text-center ">
            {/* Quote icon */}
            <div className="flex justify-center text-black text-7xl mb-6">
              <FaQuoteLeft />
            </div>
            {/* Testimonial text */}
            <p className="text-xl sm:text-3xl font-bold leading-relaxed max-w-4xl mx-auto text-center">
              {project.shortDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 mb-10">
            <Link
              to="/work"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300 text-lg"
            >
              Show More
            </Link>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;