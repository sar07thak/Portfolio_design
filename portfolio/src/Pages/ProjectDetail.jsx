import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../src/json/ProjectData.json';
import Navbar from '../../src/components/Navbar.jsx';

const ProjectDetail = () => {
  const { projectName } = useParams();
  const project = data.find((p) => p.name === projectName);

  if (!project) {
    return (
      <div className="min-h-screen bg-white text-black p-12 font-sans">
        <Navbar />
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-8 md:p-12 font-sans relative">
      <Navbar />

      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-lg shadow-lg">
            <img
              src={project?.projectImage[0]}
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
    </div>
  );
};

export default ProjectDetail;