import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'Preciso de conhecimento tecnico?',
    answer: 'Nao. A plataforma foi projetada para usuarios sem experiencia em programacao. Toda a configuracao e feita por interface visual intuitiva.',
  },
  {
    question: 'O cliente percebe que e uma IA?',
    answer: 'O AuraTalk implementa simulacao de comportamento humano — incluindo tempo de digitacao variavel e linguagem natural. A experiencia e indistinguivel de um atendimento humano de alta qualidade.',
  },
  {
    question: 'Meus dados estao seguros?',
    answer: 'Sim. A infraestrutura utiliza criptografia em transito e em repouso, com controle rigoroso de acesso e seguranca em nivel de banco de dados.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-background border-t border-white/5 relative z-20">
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-20">
          <span className="text-accent font-mono text-[10px] tracking-[0.4em] block mb-3 uppercase">/// Support & Intel</span>
          <h2 className="font-display font-bold text-white text-4xl uppercase tracking-tighter">Perguntas Frequentes</h2>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className={`accordion-item glass border border-white/5 rounded-2xl overflow-hidden cursor-pointer p-6 group ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">{faq.question}</h4>
                <Plus className="accordion-icon w-5 h-5 text-accent transition-transform duration-300" />
              </div>
              <div className="accordion-content">
                <p className="pt-6 text-xs text-gray-500 uppercase tracking-wider leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
