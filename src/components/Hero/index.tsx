export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 md:px-0">
      <div className="max-w-240 w-full text-center z-10">
        <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-6">
          Editor de Vídeos
        </p>
        <h1 className="text-5xl md:text-8xl text-secondary font-bold leading-[0.9] tracking-tighter mb-8">
          Edição <span className="text-primary">Imersiva.</span>
        </h1>
        <p className="text-white/50 md:text-xl font-light max-w-xl mx-auto mb-10">
          Edição fluída. Meu objetivo é simples: manter o espectador imerso.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 h-14 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform glow-hover uppercase tracking-widest text-sm cursor-pointer">
            Começar Projeto
          </button>
        </div>
      </div>
    </section>
  );
}
