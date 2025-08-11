import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar.jsx';
import image from "../assets/aboutPhoto.jpeg";
import Footer from './Footer.jsx';
import gsap from "gsap";
import cv from "../assets/Resume.pdf"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const aboutTextRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headings animation
      gsap.fromTo(
        headingRef.current.querySelectorAll(".heading-line"),
        { y: 80, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // About title + button animation
      gsap.fromTo(
        ".about-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-header",
            start: "top 85%",
          },
        }
      );

      // Large about text animation
      gsap.fromTo(
        aboutTextRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: aboutTextRef.current,
            start: "top 85%",
          },
        }
      );

      // Image + side text animation
      gsap.fromTo(
        imageRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".side-text",
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".side-text",
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-black p-8 md:p-12 font-sans relative">
        <Navbar />
        
        {/* main section */}
        <div 
          ref={headingRef}
          className='max-w-8xl mx-auto px-4 sm:px-6 py-12 mb-5 overflow-hidden'
        >
          <div className="heading-line text-7xl md:text-[11rem] font-bold leading-none text-center">
            SARTHAK
          </div>
          <div className="heading-line text-7xl md:text-[11rem] font-bold leading-none text-center">
            GUPTA
          </div>
        </div>

        {/* about section */}
        <div className="about-header flex flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-16">
          <h2 className="text-3xl font-medium tracking-wide">about.</h2>
          <a
            href={cv}
            download="Sarthak_Gupta_CV.pdf"
            className="flex items-center gap-2 px-10 py-3 bg-gray-200 hover:bg-black hover:text-white transition-all duration-300"
          >
            Read.CV
          </a>
        </div>

        {/* big about text */}
        <div
          ref={aboutTextRef}
          className='max-w-[50rem] md:text-5xl text-3xl font-semibold md:px-4 py-8 mb-5 overflow-hidden md:leading-14'
        >
          <div className='md:text-right'>I craft interactive and visually</div>
          <div>engaging web experiences that blend creativity with performance.</div>
        </div>

        {/* Image + side text */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mb-5 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div 
            ref={imageRef}
            className="w-full md:w-[80%] aspect-square flex justify-center items-center"
          >
            <img src={image} alt="Portfolio showcase" className="w-full h-full object-contain" />
          </div>

          {/* Text */}
          <div className="side-text w-full md:w-[35%] [word-spacing:2px] text-black text-xl font-semibold leading-7">
            I design and develop modern web interfaces that combine stunning visuals with seamless functionality for an exceptional user experience.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;