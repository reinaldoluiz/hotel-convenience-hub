import { Link, ListChecks, Zap, Leaf, HeadphonesIcon, BarChart3 } from "lucide-react";

const items = [
  { icon: Link, text: "Integración completa con el sistema del hotel" },
  { icon: ListChecks, text: "Personalización del catálogo" },
  { icon: Zap, text: "Compra ágil y sin contacto" },
  { icon: Leaf, text: "Enfoque sostenible y automatizado" },
  { icon: HeadphonesIcon, text: "Soporte cercano y mantenimiento ágil" },
  { icon: BarChart3, text: "Transparencia en ventas, stock y uso" },
];

const DifferentialsSection = () => (
  <section className="section-padding section-alt">
    <div className="container max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12">
        Por qué CheckBOX es diferente
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-4 text-left bg-card rounded-lg border border-border p-6">
            <Icon size={20} strokeWidth={1.5} className="text-primary-dark mt-0.5 shrink-0" />
            <span className="text-sm leading-relaxed">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
