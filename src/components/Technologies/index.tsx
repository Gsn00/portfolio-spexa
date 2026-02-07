import { Clapperboard, Film, Sparkles, Zap } from "lucide-react";

export default function Technologies() {
  return (
    <section className="max-w-300 mx-auto pt-40 text-secondary px-10 md:px-0">
      <span className="text-primary font-bold tracking-widest uppercase text-sm">
        Tecnologias
      </span>
      <div className="mb-12 border-b border-white/10 pb-6">
        <h2 className="text-4xl md:text-5xl font-black mt-2">
          Ferramentas e Metodologia
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <article className="rounded-3xl p-5 bg-[#101010] border border-primary/20 flex flex-col gap-3 group transition-all duration-500 neon-glow-purple hover:border-primary/40 hover:scale-102">
          <div className="aspect-square w-fit p-5 border border-primary/20 rounded-full bg-black transition-colors duration-500 group-hover:border-primary/40">
            <Clapperboard size={30} strokeWidth={1} />
          </div>

          <div className="pb-2">
            <h3 className="font-bold text-2xl text-secondary/80">
              Premiere Pro
            </h3>
            <p className="text-secondary/50 text-sm">
              Edição precisa e bem ritmada, com foco em narrativa e retenção do
              público.
            </p>
          </div>
        </article>

        <article className="rounded-3xl p-5 bg-[#101010] border border-white/20 flex flex-col gap-3 group transition-all duration-500 neon-glow-white hover:border-white hover:scale-102 relative md:top-3">
          <div className="aspect-square w-fit p-5 border border-white/20 rounded-full bg-black transition-colors duration-500 group-hover:border-white">
            <Sparkles size={30} strokeWidth={1} />
          </div>

          <div className="pb-2">
            <h3 className="font-bold text-2xl text-secondary/80">
              After Effects
            </h3>
            <p className="text-secondary/50 text-sm">
              Animações e efeitos visuais que elevam a qualidade e o impacto do
              vídeo.
            </p>
          </div>
        </article>

        <article className="rounded-3xl p-5 bg-[#101010] border border-primary/20 flex flex-col gap-3 group transition-all duration-500 neon-glow-purple hover:border-primary/40 hover:scale-102">
          <div className="aspect-square w-fit p-5 border border-primary/20 rounded-full bg-black transition-colors duration-500 group-hover:border-primary/40">
            <Film size={30} strokeWidth={1} />
          </div>

          <div className="pb-2">
            <h3 className="font-bold text-2xl text-secondary/80">
              Motion Graphics
            </h3>
            <p className="text-secondary/50 text-sm">
              Elementos animados que reforçam a mensagem e fortalecem a
              identidade visual.
            </p>
          </div>
        </article>

        <article className="rounded-3xl p-5 bg-[#101010] border border-white/20 flex flex-col gap-3 group transition-all duration-500 neon-glow-white hover:border-white hover:scale-102 relative md:top-3">
          <div className="aspect-square w-fit p-5 border border-white/20 rounded-full bg-black transition-colors duration-500 group-hover:border-white">
            <Zap size={30} strokeWidth={1} />
          </div>

          <div className="pb-2">
            <h3 className="font-bold text-2xl text-secondary/80">
              Edição Dinâmica
            </h3>
            <p className="text-secondary/50 text-sm">
              Cortes rápidos e ritmo envolvente para manter o espectador atento
              do início ao fim.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
