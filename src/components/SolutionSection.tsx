import { Link, Banknote, Settings, Clock } from "lucide-react";

const points = [
  { icon: Link, label: "Integración con PMS" },
  { icon: Banknote, label: "Compra sin efectivo" },
  { icon: Settings, label: "Operación automatizada" },
  { icon: Clock, label: "Disponibilidad 24/7" },
];

const SolutionSection = () => (
  <section id="solucion" className="section-padding bg-card">
    <div className="container max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
        Una nueva capa de conveniencia para el hotel
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
        CheckBOX es una máquina expendedora inteligente instalada en la habitación y conectada al sistema de gestión del hotel. Permite al huésped comprar productos esenciales de forma inmediata, sin efectivo y con cargo automático en el check-out.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {points.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-background">
            <Icon size={24} strokeWidth={1.5} className="text-primary-dark" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
