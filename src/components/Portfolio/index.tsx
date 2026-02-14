import { useState } from "react";
import { motion } from "motion/react";

export default function Portfolio({
  openVideo,
}: {
  openVideo: (src: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState("tiktok");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 40,
      rotate: index % 2 === 0 ? 1 : -1,
    }),

    show: (index: number) => ({
      opacity: 1,
      y: 0,
      rotate: index % 2 === 0 ? 1 : -1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="max-w-300 mx-auto px-6 pt-40 text-secondary">
      <span className="text-primary font-bold tracking-widest uppercase text-sm">
        Portfólio
      </span>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
        <h2 className="text-4xl md:text-5xl font-black mt-2">
          Trabalhos Recentes
        </h2>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-full border text-xs font-bold ${activeFilter === "tiktok" ? "bg-primary/10 text-primary border-primary/50" : "hover:bg-white/5 border-white/10"}`}
            onClick={() => setActiveFilter("tiktok")}
          >
            TIKTOK
          </button>
          <button
            className={`px-4 py-2 rounded-full border text-xs font-bold ${activeFilter === "youtube" ? "bg-primary/10 text-primary border-primary/50" : "hover:bg-white/5 border-white/10"}`}
            onClick={() => setActiveFilter("youtube")}
          >
            YOUTUBE
          </button>
        </div>
      </div>

      {activeFilter === "tiktok" && (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            custom={1}
            variants={item}
            onClick={() =>
              openVideo(
                "https://video.gumlet.io/685b0700da5f39a3fc00a0c1/6987f0da742559dc5a4bb158/main.m3u8",
              )
            }
            className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500 lg:-translate-y-2"
          >
            <div className="bg-[url(https://i.ytimg.com/vi/LEqQFHIAR_M/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDtkqB9ai6pOi_ykYf9ddw5MTWY0g&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                SPEXA
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            custom={2}
            onClick={() =>
              openVideo(
                "https://video.gumlet.io/685b0700da5f39a3fc00a0c1/698811e6742559dc5a4e0b7b/main.m3u8",
              )
            }
            className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500 lg:translate-y-4"
          >
            <div className="bg-[url(https://i.ytimg.com/vi/b6dzMutXFqk/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAjSO5LSk2NeW5_BJpVhxvYBRSXEg&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                BAHCRAFT
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            custom={3}
            className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500 lg:-translate-y-2"
          >
            <div className="bg-[url(https://i.ytimg.com/vi/S8Zve-17a8A/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDL_N0A4tBe2n5o1xIBqjaIVDZrfA&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                BAHCRAFT
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            custom={4}
            className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500 lg:translate-y-4"
          >
            <div className="bg-[url(https://i.ytimg.com/vi/FqIamSZ6Pco/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDvgBhXy2ZTs0ItIUL3Y4qTL_Bumw&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                JHONJHON
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {activeFilter === "youtube" && (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div
            custom={1}
            variants={item}
            onClick={() =>
              openVideo(
                "https://video.gumlet.io/685b0700da5f39a3fc00a0c1/6988094f924a60df4b2cc80d/main.m3u8",
              )
            }
            className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500"
          >
            <div className="bg-[url(https://img.youtube.com/vi/F_qyNqjrYHQ/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                BAHCRAFT
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
            </div>
          </motion.div>
          <motion.div
            custom={2}
            variants={item}
            onClick={() =>
              openVideo(
                "https://video.gumlet.io/685b0700da5f39a3fc00a0c1/6988094f924a60df4b2cc80d/main.m3u8",
              )
            }
            className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500"
          >
            <div className="bg-[url(https://img.youtube.com/vi/3-yV5oK6NrQ/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                BAHCRAFT
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
            </div>
          </motion.div>
          <motion.div
            custom={3}
            variants={item}
            onClick={() =>
              openVideo(
                "https://video.gumlet.io/685b0700da5f39a3fc00a0c1/6988094f924a60df4b2cc80d/main.m3u8",
              )
            }
            className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500"
          >
            <div className="bg-[url(https://img.youtube.com/vi/cjXks7BVUPQ/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                LIONTHEFLAME
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
            </div>
          </motion.div>
          <motion.div
            custom={4}
            variants={item}
            onClick={() =>
              openVideo(
                "https://video.gumlet.io/685b0700da5f39a3fc00a0c1/6988094f924a60df4b2cc80d/main.m3u8",
              )
            }
            className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500"
          >
            <div className="bg-[url(https://img.youtube.com/vi/JMAg3lEXtiw/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                Cogue12
              </span>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
