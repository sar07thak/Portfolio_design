import React, { useEffect, useRef } from 'react';
import { IoGrid } from "react-icons/io5";
import { FiCopy } from "react-icons/fi";
import { Link } from 'react-router-dom'; 
import image from "../assets/a.jpg";
import Navbar from '../Components/Navbar.jsx';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const bioRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

      gsap.fromTo(imageRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

      gsap.fromTo(bioRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
    });

    return () => ctx.revert();
  }, []);

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      console.log('Email copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <>
      <div className="bg-white text-black min-h-screen p-4 sm:p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <Navbar />

          <main className="relative">
            <div ref={imageRef} className="absolute top-0 right-0 -mt-8 hidden lg:block">
              <img
                src={image}
                alt="Sarthak Gupta"
                className="w-48 h-48 rounded-full object-cover border-4 border-white"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/e0e0e0/000000?text=Error'; }}
              />
            </div>

            <div className="flex justify-between items-center mb-8 lg:hidden">
              <img
                src={image.replace('150x150', '100x100')}
                alt="Sarthak Gupta"
                className="w-32 h-32 rounded-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/e0e0e0/000000?text=Error'; }}
              />
            </div>

            <div ref={headingRef} className="mb-12 md:mb-10">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[9rem] font-bold tracking-tighter leading-none">
                SARTH
                <span className="relative">
                  A
                  <span className="hidden lg:block absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-4xl font-light">
                    .
                  </span>
                </span>
                K
              </h1>
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[9rem] font-bold tracking-tighter leading-none">
                GUPTA
              </h1>
              <div className="mt-8">
                <button
                  onClick={() => copyToClipboard('sarthak75220@gmail.com')}
                  className="flex items-center gap-3 text-lg group"
                >
                  <span className='font-semibold md:text-xl'>sarthak75220@gmail.com</span>
                  <FiCopy className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>

            <div ref={bioRef} className="flex justify-start lg:justify-end">
              <div className="w-full lg:w-[45%]">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                  Hello, I'm a web developer specializing
                  in modern web design — based in Delhi, working
                  remote. Let's create!
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Hero;