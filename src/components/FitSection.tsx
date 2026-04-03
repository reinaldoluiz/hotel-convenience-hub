import { Building2, Palmtree, BarChart3 } from "lucide-react";

const segments = [
  { icon: Building2, title: "Hoteles urbanos", desc: "Donde el huésped busca comodidad inmediata sin perder tiempo." },
  { icon: Palmtree, title: "Hoteles vacacionales", desc: "Donde la conveniencia mejora la experiencia y fideliza al huésped." },
  { icon: BarChart3, title: "Hoteles con minibar poco rentable", desc: "Donde los costes operativos superan los ingresos del minibar actual." },
];

const FitSection = () => (
  <section className="section-padding bg-card">
    <div className="container max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Pensado para hoteles que quieren innovar sin complicar la operación
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
        CheckBOX encaja especialmente bien en hoteles urbanos y vacacionales de 3 a 5 estrellas, con más de 40 habitaciones, donde la comodidad, la automatización y el servicio al huésped son una prioridad.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {segments.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-lg border border-border p-8 text-left">
            <Icon size={24} strokeWidth={1.5} className="text-primary-dark mb-4" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FitSection;
