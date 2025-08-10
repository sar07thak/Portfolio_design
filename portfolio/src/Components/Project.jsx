import React from 'react';
import data from "../json/ProjectData.json";
import { Link } from 'react-router-dom'; // ✅ correct import

const Project = () => {
    return (
        <div className='bg-white text-black min-h-screen p-4 sm:p-8 md:p-12'>
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-bold">work.</h2>
                <button className="border border-black px-6 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors">
                    <Link to="/work">show more</Link>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.slice(0, 4).map((project, index) => (
                    <div className='border  overflow-hidden' key={index}>
                        <Link to={`/work/${project.name}`} className="relative group block w-full h-full">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://placehold.co/600x600/e0e0e0/000000?text=Image+Not+Found';
                                }}
                            />

                            {/* Dark overlay at bottom with project name */}
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
    );
};

export default Project;
