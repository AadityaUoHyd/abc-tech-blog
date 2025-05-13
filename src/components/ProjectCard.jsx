import React from 'react';

export default function ProjectCard({ project }) {
    return (
      <div className="group relative w-full max-w-[450px] mx-auto border border-teal-500 hover:border-2 h-[420px] sm:h-[460px] overflow-hidden rounded-lg transition-all">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-[60%] sm:h-[55%]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        </a>
  
        <div className="p-3 flex flex-col gap-2 h-[40%] sm:h-[45%] justify-between">
          <div>
            <p className="text-base sm:text-lg font-semibold line-clamp-2">{project.title}</p>
            {project.description && (
              <span className="italic text-xs sm:text-sm text-gray-700 dark:text-gray-300">{project.description}</span>
            )}
          </div>
  
          <div className="flex justify-between mt-2 gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 text-xs sm:text-sm text-white bg-teal-500 hover:bg-teal-600 rounded-md transition"
              >
                🔗 Live Demo
              </a>
            )}
  
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 text-xs sm:text-sm text-white bg-blue-800 hover:bg-blue-400 rounded-md transition"
              >
                💻 GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    );
}