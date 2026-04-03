import { ShoppingBag, CreditCard, Link } from "lucide-react";

const highlights = [
  { icon: ShoppingBag, label: "Compra 24/7" },
  { icon: CreditCard, label: "Pago en check-out" },
  { icon: Link, label: "Integración con PMS" },
];

const Hero = () => (
  <section className="section-padding bg-card">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-sm font-medium text-primary-dark tracking-wide uppercase mb-4">
          Solución inteligente para hoteles
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Vending inteligente en habitaciones de hotel, integrado con tu PMS
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Mejora la experiencia del huésped, reduce carga operativa y genera ingresos adicionales con una solución automatizada de conveniencia 24/7.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contacto"
            className="px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-dark transition-colors w-full sm:w-auto text-center"
          >
            Solicitar piloto
          </a>
          <a
            href="#piloto"
            className="px-7 py-3.5 rounded-md border border-border font-semibold text-sm hover:bg-secondary transition-colors w-full sm:w-auto text-center"
          >
            Ver cómo funciona
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
        {highlights.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-muted-foreground">
            <Icon size={20} className="text-primary-dark" strokeWidth={1.5} />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
