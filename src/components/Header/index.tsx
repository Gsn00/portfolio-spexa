import { TextAlignJustify, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="hidden md:flex sticky top-0 left-0 right-0 text-secondary border-b border-white/5 bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-300 w-full px-6 flex items-center justify-between mx-auto h-20">
          <h1 className="font-bold text-xl tracking-tight">SPEXA</h1>

          <nav>
            <ul className="flex items-center justify-center gap-12 font-semibold">
              <li>
                <Link
                  className="text-sm font-medium hover:text-primary tracking-widest transition-colors"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-medium hover:text-primary tracking-widest transition-colors"
                  to="/projetos"
                >
                  PROJETOS
                </Link>
              </li>
              <li className="">
                <Link
                  className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-primary hover:text-white transition-all"
                  to="#"
                >
                  WHATSAPP
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex md:hidden sticky top-0 left-0 right-0 text-secondary border-b border-white/5 bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-300 w-full px-6 flex items-center justify-between mx-auto h-20">
          <div className="w-8"></div>
          <h1 className="font-bold text-xl tracking-tight">SPEXA</h1>

          <button
            className="cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X strokeWidth={1} size={30} />
            ) : (
              <TextAlignJustify strokeWidth={1} size={30} />
            )}
          </button>
        </div>
      </div>

      <menu
        className={`fixed top-20 z-50 w-full flex md:hidden border border-white/5 bg-[#101010]/50 backdrop-blur-md text-secondary overflow-hidden transition-all duration-300 ease-initial ${menuOpen ? "h-54 opacity-100" : "h-0 opacity-0"}`}
      >
        <ul className="flex flex-col min-h-fit w-full items-center justify-center gap-12 font-semibold p-6">
          <li className="w-full">
            <Link
              className="text-sm flex justify-center w-full font-medium hover:text-primary tracking-widest transition-colors"
              to="/"
            >
              HOME
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="text-sm flex justify-center w-full font-medium hover:text-primary tracking-widest transition-colors"
              to="/projetos"
            >
              PROJETOS
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="flex justify-center items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase hover:bg-primary hover:text-white transition-all"
              to="#"
            >
              WHATSAPP
            </Link>
          </li>
        </ul>
      </menu>
    </>
  );
}
