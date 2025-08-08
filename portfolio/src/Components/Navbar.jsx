import React, { useState } from 'react';
import { IoGrid } from "react-icons/io5";
import { Link } from 'react-router-dom'; 

// You can replace this placeholder with your actual image import
// import image from "../assets/a.jpg";
const image = "https://placehold.co/150x150/e0e0e0/000000?text=SG";


// --- Reusable Navbar Component ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SVG component for the checkered close icon
  const CheckeredCloseIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="border border-black">
      <path d="M0 0H14V14H0V0Z" fill="black" />
      <path d="M14 0H28V14H14V0Z" fill="white" />
      <path d="M0 14H14V28H0V14Z" fill="white" />
      <path d="M14 14H28V28H14V14Z" fill="black" />
    </svg>
  );

  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center mb-16 md:mb-32">
        <div className="text-3xl font-bold tracking-widest">
          <Link to="/">SAGU</Link>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden lg:flex items-center gap-6">
          {isMenuOpen ? (
            <>
              <Link to="/work" className='text-lg font-medium'>Works</Link>
              <Link to="/about" className='text-lg font-medium'>About</Link>
              <Link to="/contact" className='text-lg font-medium'>Contact</Link>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <CheckeredCloseIcon />
              </button>
            </>
          ) : (
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <IoGrid size={28} />
            </button>
          )}
        </nav>

        {/* --- MOBILE NAVIGATION TOGGLE --- */}
        <button
          className="lg:hidden relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <CheckeredCloseIcon /> : <IoGrid size={28} />}
        </button>
      </header>

      {/* Full-screen Menu Overlay for MOBILE ONLY */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-opacity duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="h-full flex flex-col items-center justify-center gap-y-8">
          <Link to="/work" className='text-5xl font-bold hover:text-gray-600' onClick={() => setIsMenuOpen(false)}>Works</Link>
          <Link to="/about" className='text-5xl font-bold hover:text-gray-600' onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" className='text-5xl font-bold hover:text-gray-600' onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  );
};


export default Navbar