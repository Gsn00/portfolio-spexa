import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("tiktok");

  const setCurrentPage = (page: number) => {
    console.log("Page changed to:", page);
  };

  return (
    <>
      <Header />

      <section className="max-w-300 mx-auto px-6 pt-30 text-secondary">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Meus Projetos
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/LEqQFHIAR_M/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDtkqB9ai6pOi_ykYf9ddw5MTWY0g&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  SPEXA
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/b6dzMutXFqk/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAjSO5LSk2NeW5_BJpVhxvYBRSXEg&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/S8Zve-17a8A/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDL_N0A4tBe2n5o1xIBqjaIVDZrfA&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/FqIamSZ6Pco/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDvgBhXy2ZTs0ItIUL3Y4qTL_Bumw&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  JHONJHON
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/LEqQFHIAR_M/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDtkqB9ai6pOi_ykYf9ddw5MTWY0g&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  SPEXA
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/b6dzMutXFqk/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAjSO5LSk2NeW5_BJpVhxvYBRSXEg&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/S8Zve-17a8A/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDL_N0A4tBe2n5o1xIBqjaIVDZrfA&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/FqIamSZ6Pco/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDvgBhXy2ZTs0ItIUL3Y4qTL_Bumw&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  JHONJHON
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/LEqQFHIAR_M/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDtkqB9ai6pOi_ykYf9ddw5MTWY0g&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  SPEXA
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://i.ytimg.com/vi/b6dzMutXFqk/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAjSO5LSk2NeW5_BJpVhxvYBRSXEg&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>
          </div>
        )}

        {activeFilter === "youtube" && (
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://img.youtube.com/vi/F_qyNqjrYHQ/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://img.youtube.com/vi/3-yV5oK6NrQ/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://img.youtube.com/vi/cjXks7BVUPQ/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  LIONTHEFLAME
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://img.youtube.com/vi/JMAg3lEXtiw/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  Cogue12
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://img.youtube.com/vi/F_qyNqjrYHQ/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-video neon-glow-purple transition-all duration-500">
              <div className="bg-[url(https://img.youtube.com/vi/3-yV5oK6NrQ/maxresdefault.jpg)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                  BAHCRAFT
                </span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Pagination
        totalPages={10}
        setCurrentPage={setCurrentPage}
        currentPage={1}
      />
      <Footer />
    </>
  );
}
