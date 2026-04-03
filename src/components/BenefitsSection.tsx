import { ShoppingBag, Clock, Zap, CreditCard, TrendingUp, Users, Star, Sparkles, ListChecks } from "lucide-react";

const guestBenefits = [
  { icon: ShoppingBag, text: "Acceso inmediato a productos sin salir del hotel" },
  { icon: Clock, text: "Disponibilidad 24/7" },
  { icon: Zap, text: "Compra sencilla y sin fricción" },
  { icon: CreditCard, text: "Pago integrado en la factura del hotel" },
];

const hotelBenefits = [
  { icon: TrendingUp, text: "Nuevos ingresos complementarios" },
  { icon: Users, text: "Menor carga operativa para recepción" },
  { icon: Star, text: "Mejor experiencia del huésped" },
  { icon: Sparkles, text: "Diferenciación e innovación" },
  { icon: ListChecks, text: "Personalización del catálogo según perfil del cliente" },
];

const BenefitCard = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-start gap-4 py-4">
    <Icon size={20} strokeWidth={1.5} className="text-primary-dark mt-0.5 shrink-0" />
    <span className="text-sm leading-relaxed">{text}</span>
  </div>
);

const BenefitsSection = () => (
  <section id="beneficios" className="section-padding section-alt">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center mb-14">
        Beneficios claros para todos
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg border border-border p-8">
          <h3 className="text-lg font-semibold mb-2">Para el huésped</h3>
          <div className="divide-y divide-border">
            {guestBenefits.map((b) => <BenefitCard key={b.text} {...b} />)}
          </div>
        </div>
        <div className="bg-card rounded-lg border border-border p-8">
          <h3 className="text-lg font-semibold mb-2">Para el hotel</h3>
          <div className="divide-y divide-border">
            {hotelBenefits.map((b) => <BenefitCard key={b.text} {...b} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
