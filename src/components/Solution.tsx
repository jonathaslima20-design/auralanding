export default function Solution() {
  return (
    <section id="solucao" className="py-32 px-6 relative z-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent font-mono text-[10px] tracking-[0.4em] block mb-6 uppercase">/// O Desafio Operacional</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 text-white tracking-tighter uppercase leading-[0.9]">
              Onde a escala humana encontra o seu limite.
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed font-light">
              O atendimento manual e o maior gargalo das operacoes modernas. Enquanto sua equipe descansa, o interesse do seu lead expira.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border border-white/5 rounded-xl bg-white/[0.02]">
                <div className="text-accent font-display font-bold text-2xl mb-1">Zero</div>
                <div className="text-[10px] text-gray-500 uppercase font-mono">Tempo de Espera</div>
              </div>
              <div className="p-4 border border-white/5 rounded-xl bg-white/[0.02]">
                <div className="text-white font-display font-bold text-2xl mb-1">100%</div>
                <div className="text-[10px] text-gray-500 uppercase font-mono">Disponibilidade</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="glass p-1 rounded-3xl overflow-hidden relative max-w-sm group">
              <img
                src="/Gemini_Generated_Image_5q97hu5q97hu5q97_(1).png"
                className="w-full rounded-[1.4rem] opacity-90 object-cover"
                alt="AuraTalk AI Agent"
              />
              <div className="absolute inset-1 rounded-[1.4rem] overflow-hidden pointer-events-none">
                <div className="scanner-line"></div>
              </div>
              <div className="absolute inset-1 rounded-[1.4rem] border border-accent/20 pointer-events-none"></div>
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-accent/60 rounded-tl-sm pointer-events-none"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-accent/60 rounded-tr-sm pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-accent/60 rounded-bl-sm pointer-events-none"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-accent/60 rounded-br-sm pointer-events-none"></div>

              {/* Integrated agent card overlay */}
              <div className="absolute bottom-3 left-3 right-3 agent-card-glass rounded-2xl p-4 md:p-5">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/40 flex-shrink-0">
                    <img
                      src="/Gemini_Generated_Image_5q97hu5q97hu5q97_(1).png"
                      className="w-full h-full object-cover"
                      alt="Agent avatar"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-semibold tracking-tight">AuraTalk Agent</span>
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[10px] font-mono text-accent/80 tracking-wider uppercase">Respondendo</span>
                      <span className="flex gap-0.5">
                        <span className="w-1 h-1 bg-accent/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1 h-1 bg-accent/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1 h-1 bg-accent/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 hidden sm:block">
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Tempo resp.</div>
                    <div className="text-white text-sm font-bold">0.8s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
