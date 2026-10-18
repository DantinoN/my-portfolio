import { projects } from "../src/data/projects";
import ProjectCard from "../src/components/projects/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Projetos em Destaque
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Aplicações que unem automação industrial e desenvolvimento de software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
