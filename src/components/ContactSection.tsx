import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted) {
      toast.error("Debes aceptar la política de privacidad.");
      return;
    }
    toast.success("Solicitud enviada correctamente. Nos pondremos en contacto contigo pronto.");
    (e.target as HTMLFormElement).reset();
    setAccepted(false);
  };

  const inputClass =
    "w-full px-4 py-3 text-sm rounded-md border border-border bg-card placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors";

  return (
    <section id="contacto" className="section-padding section-alt">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Hablemos sobre un piloto para su hotel
          </h2>
          <p className="text-muted-foreground">
            Solicite una reunión y le presentaremos una propuesta adaptada a su establecimiento.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-lg p-8 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input type="text" placeholder="Nombre *" required className={inputClass} />
            <input type="text" placeholder="Hotel *" required className={inputClass} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <input type="text" placeholder="Cargo" className={inputClass} />
            <input type="email" placeholder="Email *" required className={inputClass} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <input type="tel" placeholder="Teléfono" className={inputClass} />
            <div /> {/* empty for alignment */}
          </div>
          <textarea
            placeholder="Mensaje"
            rows={4}
            className={inputClass + " resize-none"}
          />

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 accent-primary-dark"
            />
            <span className="text-xs text-muted-foreground leading-relaxed">
              He leído la Política de Privacidad y acepto el tratamiento de mis datos para responder a mi solicitud. *
            </span>
          </label>

          <button
            type="submit"
            className="w-full px-7 py-3.5 rounded-md bg-foreground text-card font-semibold text-sm hover:bg-foreground/90 transition-colors"
          >
            Solicitar información
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
