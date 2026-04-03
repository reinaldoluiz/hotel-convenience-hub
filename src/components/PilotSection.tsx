const steps = [
  { num: "01", title: "Reunión inicial", desc: "20-30 minutos para entender su hotel y necesidades." },
  { num: "02", title: "Revisión de condiciones", desc: "Número de habitaciones, ubicación y perfil de huéspedes." },
  { num: "03", title: "Instalación", desc: "Puesta en marcha rápida y sin obras." },
  { num: "04", title: "Reposición y mantenimiento", desc: "Nos encargamos de todo el operativo." },
  { num: "05", title: "Seguimiento y ajuste", desc: "Datos de uso, métricas y adaptación del catálogo." },
];

const highlights = [
  "Duración propuesta: 2 a 3 meses",
  "Sin inversión inicial para el hotel",
  "Modelo con ingresos compartidos",
  "Early partners 2026",
];

const PilotSection = () => (
  <section id="piloto" className="section-padding section-alt">
    <div className="container max-w-4xl">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Cómo funcionaría un piloto
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Proponemos una implantación progresiva, sencilla y sin fricción para validar la solución en un entorno real.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="flex items-start gap-6 bg-card rounded-lg border border-border p-6">
            <span className="text-sm font-bold text-primary-dark">{num}</span>
            <div>
              <h3 className="font-semibold text-sm mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((h) => (
          <div key={h} className="text-center bg-card rounded-lg border border-border p-5">
            <span className="text-sm font-medium">{h}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PilotSection;
