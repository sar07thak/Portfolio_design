import React from "react";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
    return (
        <section
            id="Hero"
            className="w-[80%] md:w-[50%] top-50 md:top-40 left-10 flex flex-col justify-center items-center md:items-start text-white relative z-10"
        >
            {/* Glassy Wrapper */}
            <div className="backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-2xl shadow-lg w-full text-center md:text-left flex flex-col justify-center items-center">

                {/* Status */}
                <div className="mb-4">
                    <span className="text-sm text-gray-300 relative pl-5">
                        <span className="absolute left-0 top-1.5 h-2 w-2 bg-green-400 rounded-full animate-ping"></span>
                        Available for work
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-100 mb-6">
                    Building Smart <br />
                    Responsive Interfaces <br />
                    for the <span className="text-gray-300">Digital Age</span>


                </h1>

                {/* Buttons */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <a
                        href="/your-cv.pdf" // Replace with actual path
                        download
                        className="bg-[#294f7e] hover:bg-[#495ca6] text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
