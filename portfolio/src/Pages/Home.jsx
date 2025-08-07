import React from 'react';
import Navbar from '../Components/Navbar';
import Orb from "../Orb/Orb"
import Hero from '../Components/Hero';

const Home = () => {
    return (
        <div className='relative h-[750px] bg-[#010B13] text-white'  id="Home">
            <div className="absolute inset-0 z-0 bg-[#]">
                <div style={{ width: '100%', height: '650px', position: 'relative' }}>
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                </div>
            </div>
            <Navbar />
            <Hero /> 
        </div>
    );
};

export default Home;
