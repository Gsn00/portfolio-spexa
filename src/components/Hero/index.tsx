import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 md:px-0">
      <div className="max-w-240 w-full text-center z-10">
        <motion.p
          className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          Editor de Vídeos
        </motion.p>

        <motion.h1
          className="text-5xl md:text-8xl text-secondary font-bold leading-[0.9] tracking-tighter mb-8"
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
        >
          Edição <span className="text-primary">Imersiva.</span>
        </motion.h1>

        <motion.p
          className="text-white/50 md:text-xl font-light max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 1,
            ease: "easeOut",
          }}
        >
          Edição fluída. Meu objetivo é simples: manter o espectador imerso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            delay: 1.6,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 h-14 bg-primary text-white font-bold rounded-full uppercase tracking-widest text-sm cursor-pointer glow-hover"
          >
            Começar Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
