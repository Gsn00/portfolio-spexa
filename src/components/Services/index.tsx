import { CheckCheck, MonitorPlay, Package2, Smartphone } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 50,
      scale: index === 1 ? 0.95 : 0.9,
    }),
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: index === 1 ? 1.05 : 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="max-w-300 mx-auto px-6 pt-40 text-secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Quais serviços eu ofereço?
        </h2>
        <p className="text-zinc-400">
          Conteúdo editado pra prender atenção e crescer de verdade.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div
          custom={0}
          variants={item}
          className="bg-[#101010] p-10 rounded-3xl border-t-2 border-b-2 border-purple-500/30 hover:border-purple-500 transition-colors duration-500"
        >
          <div className="size-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-500 mb-6">
            <MonitorPlay size={40} strokeWidth={1} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Edição Longa</h3>
          <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
            Edição fluida pra vídeos longos e aulas, com ritmo certo pra segurar
            quem está assistindo até o final.
          </p>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2">
              <CheckCheck size={16} strokeWidth={1} />
              Storytelling que prende
            </li>
            <li className="flex items-center gap-2">
              <CheckCheck size={16} strokeWidth={1} />
              Áudio limpo e visual bem tratado
            </li>
          </ul>
        </motion.div>

        <motion.div
          custom={1}
          variants={item}
          className="bg-[#101010] p-10 rounded-3xl border-t-2 border-b-2 border-primary/30 hover:border-primary transition-colors scale-105 shadow-2xl shadow-primary/10 duration-500"
        >
          <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
            <Smartphone size={40} strokeWidth={1} />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">Reels/TikTok</h3>
          <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
            Cortes rápidos, legendas dinâmicas e edição pensada pra chamar
            atenção nos primeiros segundos.
          </p>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2">
              <CheckCheck size={16} strokeWidth={1} />
              Retenção desde o início
            </li>
            <li className="flex items-center gap-2">
              <CheckCheck size={16} strokeWidth={1} />
              Motion e legendas animadas
            </li>
          </ul>
        </motion.div>

        <motion.div
          custom={2}
          variants={item}
          className="bg-[#101010] p-10 rounded-3xl border-t-2 border-b-2 border-purple-500/30 hover:border-purple-500 transition-colors duration-500"
        >
          <div className="size-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
            <span className="material-symbols-outlined text-4xl">
              <Package2 size={40} strokeWidth={1} />
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Pacotes Mensais
          </h3>
          <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
            Edição contínua pra quem posta sempre e quer crescer com
            consistência, sem dor de cabeça.
          </p>
          <ul className="space-y-3 text-sm font-medium">
            <li className="flex items-center gap-2">
              <CheckCheck size={16} strokeWidth={1} />
              Conteúdo todo mês
            </li>
            <li className="flex items-center gap-2">
              <CheckCheck size={16} strokeWidth={1} />
              Foco em crescimento e alcance
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
