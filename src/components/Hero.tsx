import { ShoppingBag, CreditCard, Link } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration-clean.png";

const highlights = [
  { icon: ShoppingBag, label: "Compra 24/7" },
  { icon: CreditCard, label: "Pago en check-out" },
  { icon: Link, label: "Integración con PMS" },
];

const Hero = () => (
  <section className="section-padding bg-card">
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src={heroIllustration}
            alt="Huésped usando CheckBOX Vending en su habitación de hotel"
            className="w-full max-w-sm lg:max-w-md object-contain"
          />
        </div>

        <div className="flex-1 text-center lg:text-left order-1 lg:order-2">
          <span className="inline-block text-sm font-medium text-primary-dark tracking-wide uppercase mb-4">
            Solución inteligente para hoteles
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Vending inteligente en habitaciones de hotel, integrado con tu PMS
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Mejora la experiencia del huésped, reduce carga operativa y genera ingresos adicionales con una solución automatizada de conveniencia 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
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
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mt-12">
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
