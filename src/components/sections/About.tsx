import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            {/* Foto de Perfil Otimizada */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-slate-100 shadow-lg bg-slate-100">
              <Image 
                src="/danton.jpg" 
                alt="Foto de Danton Coelho" 
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 256px, 256px"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Sobre Mim
            </h2>
            <div className="text-lg text-slate-600 space-y-4">
              <p>
                Sou estudante do 2º ano de Engenharia de Controle e Automação na Universidade Federal do Rio Grande (FURG), atualmente em processo de transição para a Engenharia de Computação. A minha verdadeira paixão é construir soluções que interligam o mundo físico ao digital.
              </p>
              <p>
                A minha base académica deu-me uma compreensão sólida de lógica digital, circuitos elétricos e microcontroladores. No entanto, é no desenvolvimento de software e na programação orientada a objetos que encontro o ambiente ideal para criar interfaces e sistemas escaláveis.
              </p>
              <p>
                Trabalho no desenvolvimento de aplicações web modernas utilizando <strong>Python, React, Next.js, TypeScript e Tailwind CSS</strong>, com um foco constante na criação de código modular, organizado e versionado com as melhores práticas de Git e GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}