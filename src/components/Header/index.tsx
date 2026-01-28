export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 text-secondary border-b border-white/5 bg-black/50 backdrop-blur-md z-50">
      <div className="max-w-300 w-full px-6 flex items-center justify-between mx-auto h-20">
        <h1 className="font-bold text-xl tracking-tight">SPEXA</h1>

        <nav>
          <ul className="flex items-center justify-center gap-12 font-semibold">
            <li>
              <a
                className="text-sm font-medium hover:text-primary tracking-widest transition-colors"
                href="#"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                className="text-sm font-medium hover:text-primary tracking-widest transition-colors"
                href="#"
              >
                PROJETOS
              </a>
            </li>
            <li className="">
              <a
                className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                WHATSAPP
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
