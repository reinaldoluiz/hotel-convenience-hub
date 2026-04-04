import logo from "@/assets/checkbox-logo.svg";
import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-3">
          <img src={logo} alt="CheckBOX Vending" className="h-8 w-auto" />
          <p className="text-sm text-muted-foreground">
            Soluciones inteligentes de conveniencia para hoteles.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
          <a href="mailto:info@checkboxvending.com" className="hover:text-foreground transition-colors">
            info@checkboxvending.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} CheckBOX Vending. Todos los derechos reservados.</span>
        <div className="flex flex-wrap gap-6">
          <a href="/aviso-legal" className="hover:text-foreground transition-colors">Aviso Legal</a>
          <a href="/politica-de-privacidad" className="hover:text-foreground transition-colors">Política de Privacidad</a>
          <a href="/politica-de-cookies" className="hover:text-foreground transition-colors">Política de Cookies</a>
          <a href="/condiciones-de-contratacion" className="hover:text-foreground transition-colors">Condiciones de Contratación</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
