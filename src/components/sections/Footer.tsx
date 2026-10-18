export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight">Danton Coelho</h3>
          <p className="text-slate-400 mt-2 text-sm">
            Construindo a ponte entre Automação Industrial e Software.
          </p>
        </div>
        
        <div className="flex gap-6 font-medium text-sm">
          <a href="https://github.com/DantinoN" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/danton-coelho-b10927399/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:dantoncoelho02@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}