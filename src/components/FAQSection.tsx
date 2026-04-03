import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Qué tipo de hoteles pueden implantar CheckBOX?",
    a: "CheckBOX está diseñado para hoteles urbanos y vacacionales de 3 a 5 estrellas con más de 40 habitaciones, donde la automatización y la experiencia del huésped son prioridades estratégicas.",
  },
  {
    q: "¿Se necesita inversión inicial?",
    a: "No. Nosotros proporcionamos el equipo e infraestructura. El hotel no asume coste de instalación ni de adquisición de máquinas.",
  },
  {
    q: "¿Cómo se realiza el cobro al huésped?",
    a: "El cargo se integra automáticamente en la factura del hotel, a través del PMS, para que el huésped lo pague cómodamente en el check-out.",
  },
  {
    q: "¿Qué incluye el servicio mensual?",
    a: "Incluye el alquiler de la máquina, la reposición de productos, el mantenimiento preventivo y correctivo, y acceso a datos de uso y ventas.",
  },
  {
    q: "¿Se puede adaptar el catálogo de productos?",
    a: "Sí. El catálogo se personaliza según el perfil del hotel y sus huéspedes, con productos que van desde snacks y bebidas hasta artículos de higiene y electrónica básica.",
  },
  {
    q: "¿Cómo se gestiona el piloto?",
    a: "El piloto tiene una duración de 2 a 3 meses. Incluye instalación, operación completa por nuestra parte y seguimiento con datos de uso para evaluar resultados.",
  },
  {
    q: "¿Qué soporte ofrece la empresa?",
    a: "Ofrecemos soporte directo, mantenimiento ágil y un interlocutor dedicado durante toda la duración del servicio.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-card">
    <div className="container max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center mb-12">
        Preguntas frecuentes
      </h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6">
            <AccordionTrigger className="text-sm font-medium text-left hover:no-underline">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
