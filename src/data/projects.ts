export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Dashboard SCADA Web",
    description: "Interface de monitorização industrial com componentes isolados para simulação de sensores.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/DantinoN/seu-projeto-1"
  },
  {
    id: "2",
    title: "Data Logger Serial",
    description: "Script para leitura de dados reais via comunicação serial com microcontrolador ATmega328P.",
    technologies: ["Python", "POO", "Arduino"],
    githubUrl: "https://github.com/DantinoN/seu-projeto-2"
  }
];