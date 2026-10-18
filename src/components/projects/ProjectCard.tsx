import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <a 
        href={project.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-auto"
      >
        Ver código no GitHub
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}