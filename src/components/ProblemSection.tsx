import { Clock, TrendingDown, Package, Frown } from "lucide-react";

const problems = [
  { icon: Package, title: "Olvidos de productos esenciales", desc: "Los huéspedes olvidan artículos básicos y no quieren salir del hotel." },
  { icon: Clock, title: "Tiempo operativo para recepción", desc: "El personal pierde tiempo atendiendo peticiones que podrían resolverse al instante." },
  { icon: TrendingDown, title: "Baja rentabilidad del minibar", desc: "Alto coste de reposición y control con retornos cada vez menores." },
  { icon: Frown, title: "Experiencia poco flexible", desc: "El minibar tradicional no se adapta a la experiencia del huésped actual." },
];

const ProblemSection = () => (
  <section className="section-padding section-alt">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            El minibar tradicional ya no responde a la experiencia actual del huésped
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Muchos huéspedes olvidan productos esenciales durante su viaje y no quieren salir del hotel, especialmente por la noche. La recepción pierde tiempo atendiendo estas peticiones y el minibar tradicional suele implicar más coste operativo, reposición y control, con una experiencia limitada para hoteles modernos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-lg p-6 border border-border">
              <Icon size={22} strokeWidth={1.5} className="text-foreground mb-3" />
              <h3 className="font-semibold text-sm mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
