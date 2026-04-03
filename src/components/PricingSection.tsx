const items = [
  { name: "Alquiler mensual de la máquina", price: "80 €/mes" },
  { name: "Servicio de reposición y mantenimiento", price: "30 €/mes" },
  { name: "Snacks básicos", price: "desde 1,50 €" },
  { name: "Kit de higiene viajero", price: "3,50 €" },
  { name: "Adaptador universal", price: "8,90 €" },
  { name: "Cosmética básica", price: "3,00 €" },
];

const PricingSection = () => (
  <section id="tarifas" className="section-padding bg-card">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Tarifas y referencias
        </h2>
        <p className="text-muted-foreground">
          Para facilitar la evaluación inicial del servicio, mostramos tarifas orientativas y ejemplos de productos.
        </p>
      </div>

      <div className="border border-border rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-background">
              <th className="text-left font-medium p-4 text-muted-foreground">Concepto</th>
              <th className="text-right font-medium p-4 text-muted-foreground">Tarifa orientativa</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ name, price }, i) => (
              <tr key={name} className={i < items.length - 1 ? "border-b border-border" : ""}>
                <td className="p-4">{name}</td>
                <td className="p-4 text-right font-medium">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Las tarifas pueden ajustarse según el número de habitaciones, el volumen de instalación y las necesidades específicas del hotel.
      </p>
    </div>
  </section>
);

export default PricingSection;
