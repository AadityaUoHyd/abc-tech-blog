export default function ProjectCard({ project }) {
    return (
      <div className="group relative w-full border border-teal-500 hover:border-2 h-[420px] overflow-hidden rounded-lg sm:w-[450px] transition-all mx-auto">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          />
        </a>
  
        <div className="p-3 flex flex-col gap-2 h-[160px] justify-between">
          <div>
            <p className="text-lg font-semibold line-clamp-2">{project.title}</p>
            {project.description && (
              <span className="italic text-sm text-gray-700 dark:text-gray-300">{project.description}</span>
            )}
          </div>
  
          <div className="flex justify-between mt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 text-sm text-white bg-teal-500 hover:bg-teal-600 rounded-md transition"
              >
                🔗 Live Demo
              </a>
            )}
  
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 text-sm text-white bg-blue-800 hover:bg-blue-400 rounded-md transition"
              >
                💻 GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    );
}
