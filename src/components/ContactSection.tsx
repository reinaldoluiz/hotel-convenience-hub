import { useState } from "react";
import { toast } from "sonner";

const WEB3FORMS_KEY = "daca8576-e4fe-4e82-94ac-4eb62994062a";

const ContactSection = () => {
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted) {
      toast.error("Debes aceptar la política de privacidad.");
      return;
    }

    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Solicitud enviada correctamente. Nos pondremos en contacto contigo pronto.");
        form.reset();
        setAccepted(false);
      } else {
        toast.error("Error al enviar el formulario. Inténtelo de nuevo.");
      }
    } catch {
      toast.error("Error de conexión. Inténtelo de nuevo.");
    } finally {
      setLoading(false);
    }
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
          <input type="hidden" name="subject" value="Nueva solicitud desde CheckBOX Vending" />
          <input type="hidden" name="from_name" value="CheckBOX Vending Web" />

          <div className="grid sm:grid-cols-2 gap-5">
            <input type="text" name="nombre" placeholder="Nombre *" required className={inputClass} />
            <input type="text" name="hotel" placeholder="Hotel *" required className={inputClass} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <input type="text" name="cargo" placeholder="Cargo" className={inputClass} />
            <input type="email" name="email" placeholder="Email *" required className={inputClass} />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <input type="tel" name="telefono" placeholder="Teléfono" className={inputClass} />
            <div />
          </div>
          <textarea
            name="mensaje"
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
            disabled={loading}
            className="w-full px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-dark transition-colors disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Solicitar información"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
