const plans = [
  {
    level: 'Nivel 01 // Business',
    price: 'R$197',
    annual: 'Anual: R$157,58/mês',
    features: ['1 Agente de IA', '2.000 Mensagens', '1 Conexao WhatsApp', '2 Bases de Conhecimento'],
    cta: 'Iniciar Trial',
    popular: false,
  },
  {
    level: 'Nivel 02 // Professional',
    price: 'R$397',
    annual: 'Anual: R$317,58/mês',
    features: ['Ate 5 Agentes', '10.000 Mensagens', '3 Conexoes WhatsApp', '10 Bases (PDF/Files)', 'Metricas Avancadas'],
    cta: 'Selecionar Pro',
    popular: true,
  },
  {
    level: 'Nivel 03 // Elite',
    price: 'R$797',
    annual: 'Anual: R$637,58/mês',
    features: ['Agentes Ilimitados', 'Mensagens Ilimitadas', 'Conexoes Ilimitadas', 'Webhooks & Integracoes', 'Suporte Prioritario'],
    cta: 'Falar com Consultor',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-background relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-24">
          <span className="text-accent font-mono text-[10px] tracking-[0.4em] block mb-3 uppercase">/// Investment Plans</span>
          <h2 className="font-display font-bold text-white text-4xl md:text-6xl uppercase tracking-tighter">Dimensione sua Operacao</h2>
          <p className="text-gray-500 font-mono text-[10px] mt-4 tracking-widest uppercase">Escolha o nivel de infraestrutura necessario</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.level}
              className={`glass p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden ${
                plan.popular
                  ? 'pricing-card-popular'
                  : 'border border-white/5 hover:border-white/20 transition-all'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[8px] font-bold px-4 py-1 uppercase tracking-widest">
                  Recomendado
                </div>
              )}
              <div>
                <div className={`text-[10px] font-mono tracking-[0.3em] uppercase mb-8 ${plan.popular ? 'text-accent' : 'text-gray-500'}`}>
                  {plan.level}
                </div>
                <div className="mb-10">
                  <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                  <span className="text-gray-600 font-mono text-xs uppercase">/mes</span>
                  <div className="text-[10px] text-accent mt-2 font-mono uppercase tracking-widest italic">{plan.annual}</div>
                </div>
                <ul className={`space-y-4 mb-10 text-xs font-mono uppercase tracking-widest ${plan.popular ? 'text-white/80' : 'text-gray-400'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-white hover:text-black'
                    : 'border border-white/10 text-white hover:bg-white hover:text-black'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
