export default function Portfolio() {
  return (
    <section
      className="px-6 py-24 overflow-hidden text-secondary"
      id="portfolio"
    >
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center mb-16 gap-4 w-full text-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic">
              Trabalhos Recentes
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Clique para ver cada projeto.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
          <div className="md:col-span-7 transition-all duration-300 cursor-pointer -rotate-2 hover:rotate-0 hover:scale-105">
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl glow-hover transition-all duration-300">
              <div className="absolute bottom-8 left-8">
                <span className="bg-primary text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3 inline-block">
                  Vídeo Horizontal
                </span>
                <h3 className="text-3xl font-black">
                  Maiores mitadas do Mata-Mata
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 transition-all duration-300 cursor-pointer rotate-1 hover:rotate-0 hover:scale-105">
            <div className="relative h-full min-h-100 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl glow-hover transition-all duration-300">
              <div className="absolute bottom-8 left-8">
                <span className="bg-white/20 backdrop-blur-md text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3 inline-block">
                  Reels / Tiktok
                </span>
                <h3 className="text-3xl font-black">
                  Edição Estilo "Alex Hormozi"
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 transition-all duration-300 cursor-pointer -rotate-2 hover:rotate-0 hover:scale-105">
            <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl glow-hover transition-all duration-300">
              <div className="absolute bottom-8 left-8">
                <span className="bg-white/20 backdrop-blur-md text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3 inline-block">
                  Reels / Tiktok
                </span>
                <h3 className="text-2xl font-black">Cinematic Europe Trip</h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 transition-all duration-300 cursor-pointer rotate-1 hover:rotate-0 hover:scale-105">
            <div className="relative aspect-21/9 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl glow-hover transition-all duration-300">
              <div className="absolute bottom-8 left-8">
                <span className="bg-primary text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3 inline-block">
                  Vídeo Horizontal
                </span>
                <h3 className="text-3xl font-black">
                  Day in the Life of a Creator
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
