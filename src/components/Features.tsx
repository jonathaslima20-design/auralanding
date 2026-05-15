import { useEffect, useRef } from 'react';
import { Users, Layers, Database, BarChart } from 'lucide-react';

function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={ref} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-white/5 pb-10 gap-8">
          <div>
            <span className="text-accent font-mono text-[10px] tracking-[0.4em] block mb-3 uppercase">/// Core Functionalities</span>
            <h2 className="font-display font-bold text-white text-4xl md:text-6xl uppercase tracking-tighter">Recursos de Elite</h2>
          </div>
          <div className="md:text-right font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            <div className="flex items-center md:justify-end gap-2 text-white mb-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-blink"></span>
              MOTOR: GOOGLE GEMINI
            </div>
            Latencia Media: &lt; 1.2s
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          <SpotlightCard className="md:col-span-2 md:row-span-2 glass rounded-3xl overflow-hidden group p-10 flex flex-col justify-end">
            <div className="absolute top-10 left-10 w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent rounded-2xl">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-3xl text-white mb-4">Agentes com Personalidade</h3>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Defina nome, tom de voz, idioma e nivel de formalidade. Cada agente opera de forma independente com suas proprias regras e base de conhecimento.
            </p>
          </SpotlightCard>

          <SpotlightCard className="glass rounded-3xl p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start font-mono text-[9px] text-gray-500 tracking-widest uppercase">
              Multimodal
              <Layers className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xl font-display font-bold text-white mb-1 uppercase">Texto, Audio e Imagem</div>
              <p className="text-[9px] text-gray-500 tracking-wider uppercase leading-tight">Interpretacao completa de inputs dos clientes.</p>
            </div>
          </SpotlightCard>

          <SpotlightCard className="glass rounded-3xl p-8 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-white font-display font-bold text-xs tracking-widest uppercase">
              <Database className="w-4 h-4 text-accent" /> Knowledge
            </div>
            <div className="font-mono text-[8px] text-gray-600 space-y-1">
              <div>PDF_DOC_INDEXING...</div>
              <div>URL_CONTENT_PARSING...</div>
            </div>
            <div className="text-[9px] text-accent font-mono tracking-widest flex items-center gap-2 uppercase">
              Indexacao RAG Ativa
            </div>
          </SpotlightCard>

          <SpotlightCard className="md:col-span-2 glass rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between overflow-hidden">
            <div className="z-10">
              <h3 className="font-display font-bold text-2xl text-white mb-2 uppercase tracking-tighter">Transbordo Inteligente</h3>
              <p className="text-gray-500 text-[10px] font-mono tracking-widest uppercase">Escala automatica para humanos via palavra-chave.</p>
            </div>
            <div className="w-full sm:w-48 mt-6 sm:mt-0 relative h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-accent/5 rounded-lg border border-accent/10"></div>
              <span className="font-mono text-accent text-xs animate-pulse">WAITING_FOR_HUMAN...</span>
            </div>
          </SpotlightCard>

          <SpotlightCard className="glass rounded-3xl p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center font-mono text-[9px] text-gray-500 tracking-widest uppercase">
              Eficiencia
              <BarChart className="w-3 h-3 text-white" />
            </div>
            <div className="text-3xl font-display font-bold text-white uppercase tracking-tighter">Dashboards</div>
            <div className="text-[9px] text-white/40 font-mono tracking-tighter">Monitoramento Real-time</div>
          </SpotlightCard>

          <SpotlightCard className="glass rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start font-display font-bold text-xs text-white tracking-widest uppercase">
              Fidelidade
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#FF3B00]"></div>
            </div>
            <p className="text-[9px] text-gray-500 leading-tight uppercase font-mono">
              Digitacao progressiva e pausas naturais para simulacao humana.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
