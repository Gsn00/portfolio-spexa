export default function Portfolio() {
  return (
    <section className="max-w-300 mx-auto px-6 pt-40 text-secondary">
      <span className="text-primary font-bold tracking-widest uppercase text-sm">
        Portfólio
      </span>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-black mt-2">
          Trabalhos Recentes
        </h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full border border-primary/50 text-xs font-bold bg-primary/10 text-primary">
            TIKTOK
          </button>
          <button className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold hover:bg-white/5">
            YOUTUBE
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="staggered-item group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
          <div className="bg-[url(https://i.ytimg.com/vi/LEqQFHIAR_M/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDtkqB9ai6pOi_ykYf9ddw5MTWY0g&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
              SPEXA
            </span>
            <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
          </div>
        </div>

        <div className="staggered-item group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
          <div className="bg-[url(https://i.ytimg.com/vi/b6dzMutXFqk/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAjSO5LSk2NeW5_BJpVhxvYBRSXEg&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
              BAHCRAFT
            </span>
            <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
          </div>
        </div>

        <div className="staggered-item group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
          <div className="bg-[url(https://i.ytimg.com/vi/psvx9jBBeP0/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBkcI-lnZrH3B3xXXwC_WkTPNlPGw&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
              SPEXA
            </span>
            <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
          </div>
        </div>

        <div className="staggered-item group relative overflow-hidden rounded-2xl aspect-9/16 neon-glow-purple transition-all duration-500">
          <div className="bg-[url(https://i.ytimg.com/vi/d2uMYW90GgA/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLAhnvQzvd7UIGxOqrfZpcNsw6m-kw&usqp=CCk)] absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="bg-purple-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
              KID BENGALA
            </span>
            <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
