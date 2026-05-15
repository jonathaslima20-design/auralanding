export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-10"></div>

      <div className="absolute inset-0 -z-10 opacity-30 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full animate-reverse-spin"></div>
      </div>

      <div className="relative z-20 max-w-5xl">
        <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full mb-10 backdrop-blur-md">
          <span className="font-mono text-[9px] text-accent tracking-[0.3em] uppercase">Enterprise AI Infrastructure</span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-[8rem] tracking-tighter mb-8 leading-[0.85] uppercase">
          <span className="text-white">A EVOLUÇÃO DO</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">ATENDIMENTO</span> <br />
          <span className="text-accent text-3xl md:text-7xl tracking-wide mt-2 md:mt-4 block">CONVERSACIONAL.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-light italic">
          Agentes inteligentes treinados em sua base de conhecimento para entregas de alta precisao.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#pricing"
            className="bg-accent text-white px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-[0_0_40px_rgba(255,59,0,0.2)]"
          >
            Configurar Primeiro Agente
          </a>
          <a
            href="#pricing"
            className="border border-white/20 text-white px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all"
          >
            Conhecer os planos
          </a>
        </div>
      </div>
    </section>
  );
}