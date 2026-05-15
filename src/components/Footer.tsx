export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#050505] relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold text-white tracking-tighter font-display uppercase">
            AURA<span className="text-accent font-display tracking-tighter">//</span>TALK
          </span>
          <p className="text-[10px] font-mono text-gray-600 mt-2 uppercase tracking-widest italic">
            Agentes de IA para WhatsApp. Automacao Conversacional Deterministica.
          </p>
        </div>

        <div className="flex gap-10 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">API Status</a>
        </div>

        <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">
          &copy; 2024 AuraTalk AI Systems.
        </div>
      </div>
    </footer>
  );
}
