export default function CTA() {
  return (
    <section className="py-40 bg-background relative z-20 overflow-hidden text-center">
      <div className="absolute inset-0 dot-grid opacity-20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl md:text-7xl text-white mb-10 uppercase tracking-tighter leading-none">
          AUTOMACAO SEM <br /> PERDA DE <span className="text-accent">QUALIDADE.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 font-light italic max-w-2xl mx-auto">
          Libere sua equipe para as interacoes que realmente exigem intervencao humana enquanto a IA cuida da escala.
        </p>
        <button className="bg-white text-black px-12 py-6 font-bold text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all shadow-2xl">
          Configurar meu primeiro agente agora
        </button>
      </div>
    </section>
  );
}
