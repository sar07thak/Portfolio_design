import { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%', // start animating when footer enters view
            toggleActions: 'play none none none',
            once: true, // animate only once
            // markers: true, // enable this to debug
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-20 px-6 sm:px-10 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left */}
        <div className="space-y-10 ">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-white opacity-0"
          >
            Curious about what we can create together?
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-300">
            Let’s bring something extraordinary to life!
          </h3>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button className="bg-white text-black px-8 py-4 font-semibold text-lg hover:bg-gray-200 transition-colors">
              Get in Touch
            </button>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-8 bg-gray-300"></span>
              </span>
              <span className="text-sm text-gray-300">Available for Work</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between">
          <div className="flex md:justify-end gap-8 text-lg">
            <a
              href="https://www.linkedin.com/in/sarthak-gupta-508176297/"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/sar07thak"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <p className="mt-10 text-sm text-gray-500   md:text-right">
            © {new Date().getFullYear()} Sarthak Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;