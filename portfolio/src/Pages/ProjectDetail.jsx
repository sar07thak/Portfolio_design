import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../json/ProjectData.json';
import Navbar from '../../src/components/Navbar.jsx'

const ProjectDetail = () => {
  const { projectName } = useParams();
  const project = data.find(p => p.name === projectName);

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black p-12">
        <Navbar />
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-12 border border-red-600">
       <Navbar />
      
      <main className="container mx-auto px-6 lg:px-8 py-16 md:py-24  ">
        
        {/* Main two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 items-center border">

          {/* === LEFT COLUMN: IMAGE === */}
          <div className="w-full max-w-lg mx-auto md:mx-0 border">
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="w-full h-auto object-contain rounded-sm"
            />
          </div>

          {/* === RIGHT COLUMN: DETAILS === */}
          <div className="flex flex-col h-full border">
            {/* Metadata (pushed to the top) */}
            {/* <div className="w-full text-left md:text-right mb-auto">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                INDUSTRY 
                <span className="block font-semibold text-sm text-black">{project.type} Development</span>
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-4">
                YEAR 
                <span className="block font-semibold text-sm text-black">{project.year}</span>
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-4">
                EXPERIENCE 
                <span className="block font-semibold text-sm text-black">{project.type}</span>
              </p>
            </div> */}
            
            {/* Title Section (appears in the middle) */}
            <div className="mt-12 md:mt-0">
              {/* <div className="w-2.5 h-2.5 bg-black rounded-full mb-6"></div> */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                {project.name}
              </h1>
            </div>
          </div>
        </div>

        {/* === ABOUT SECTION & LINKS (Below the main layout) === */}
        <div className="max-w-4xl mx-auto mt-20 md:mt-28">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">About the Project</h2>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">{project.about}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
                {project.WorkingUrl && (
                    <a href={project.WorkingUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">
                        View Live Site →
                    </a>
                )}
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">
                        GitHub Repository →
                    </a>
                )}
            </div>
        </div>

      </main>
    </div>
  );
};

export default ProjectDetail;
