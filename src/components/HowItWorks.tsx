const steps = [
  { number: '01', title: 'Configuracao', description: 'Defina o perfil, tom e comportamento do seu agente.' },
  { number: '02', title: 'Alimentacao', description: 'Suba PDFs, URLs e materiais do seu negocio.' },
  { number: '03', title: 'Conexao', description: 'Vincule o WhatsApp via QR Code em segundos.' },
  { number: '04', title: 'Operacao', description: 'Atendimento autonomo e monitoramento imediato.' },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-32 bg-background border-t border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent font-mono text-[10px] tracking-[0.4em] block mb-6 uppercase">/// Workflow</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
            Quatro etapas para a <br />automacao total
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group relative p-8 border border-white/5 rounded-3xl hover:bg-white/5 transition-all">
              <div className="font-mono text-accent text-4xl mb-6 opacity-40">{step.number}</div>
              <h4 className="font-bold text-white uppercase tracking-widest mb-4 text-sm">{step.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
