export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-40 text-secondary">
      <div className="max-w-300 mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <h1 className="font-bold text-xl tracking-tight">SPEXA</h1>
        <p className="text-white/40 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Spexa. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          <a
            className="text-white/50 hover:text-primary transition-colors text-xs uppercase tracking-widest"
            href="#"
          >
            Instagram
          </a>
          <a
            className="text-white/50 hover:text-primary transition-colors text-xs uppercase tracking-widest"
            href="#"
          >
            YouTube
          </a>
          <a
            className="text-white/50 hover:text-primary transition-colors text-xs uppercase tracking-widest"
            href="#"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
