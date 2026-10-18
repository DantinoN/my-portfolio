export default function Hero() {
  return (
    <section className="bg-white py-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
          Olá, eu sou o <span className="text-blue-600">Danton</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Estudante de Engenharia de Controle e Automação, com foco em unir hardware, sistemas industriais e desenvolvimento web.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="https://github.com/DantinoN" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
            Ver o meu GitHub
          </a>
        </div>
      </div>
    </section>
  );
}