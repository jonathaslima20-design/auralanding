import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
          <a href="#" className="group relative z-50">
            <span className="text-xl font-bold text-white tracking-tighter font-display group-hover:text-accent transition-colors">
              AURA<span className="text-accent group-hover:text-white transition-colors">//</span>TALK
            </span>
          </a>

          <div className="hidden md:flex gap-8 text-[10px] font-mono tracking-[0.2em] text-gray-500">
            <a href="#solucao" className="hover:text-white transition-colors uppercase">O que e</a>
            <a href="#features" className="hover:text-white transition-colors uppercase">Recursos</a>
            <a href="#como-funciona" className="hover:text-white transition-colors uppercase">Setup</a>
            <a href="#pricing" className="hover:text-white transition-colors uppercase">Planos</a>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            <div className="flex items-center gap-2 text-green-500 font-mono text-[9px] tracking-widest">
              <span className="w-1.5 h-1.5 animate-pulse bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              PLATFORM ONLINE
            </div>
            <button className="bg-white text-black px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all rounded-sm">
              Login
            </button>
          </div>

          <button onClick={toggleMenu} className="md:hidden z-50 text-white p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex flex-col gap-10 text-center">
          <a href="#solucao" onClick={closeMenu} className="text-3xl font-display font-bold text-white hover:text-accent">SOLUCAO</a>
          <a href="#features" onClick={closeMenu} className="text-3xl font-display font-bold text-white hover:text-accent">RECURSOS</a>
          <a href="#pricing" onClick={closeMenu} className="text-3xl font-display font-bold text-white hover:text-accent">PLANOS</a>
          <div className="w-12 h-px bg-white/10 mx-auto"></div>
          <button className="text-xl font-mono text-accent uppercase tracking-tighter">Login_Terminal</button>
        </div>
      </div>
    </>
  );
}
