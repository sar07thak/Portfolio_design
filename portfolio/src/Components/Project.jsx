import React from 'react'
import data from "../json/ProjectData.json"
import { Link } from 'react-router'


const Project = () => {
    
    return (
        
        <div className='bg-white text-black min-h-screen p-4 sm:p-8 md:p-12 '>
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl md:text-3xl font-semibold">work.</h2>
                <button className="border border-gray-400 px-6 py-3 text-xl font-medium hover:bg-black hover:text-white transition duration-300 ease-out">
                    <Link to="/work">Show more</Link>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.slice(0,4).map((project, index) => (
                    <a href={project.url} key={index} className="block relative group rounded-lg overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x600/e0e0e0/000000?text=Image+Not+Found'; }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white text-3xl font-bold">{project.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Project