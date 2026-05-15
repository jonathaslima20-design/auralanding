export default function Marquee() {
  const items = ['Google Gemini', 'WhatsApp API', 'Neural Processing', 'High Fidelity', '24/7 Autonomy'];
  const repeated = [...items, ...items, ...items];

  return (
    <div className="border-y border-white/5 bg-[#080808] py-10 relative z-20 overflow-hidden marquee-mask">
      <div className="flex whitespace-nowrap animate-marquee w-[300%]">
        <div className="flex gap-24 px-12 items-center text-white/20 font-display font-bold text-2xl tracking-widest uppercase">
          {repeated.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
