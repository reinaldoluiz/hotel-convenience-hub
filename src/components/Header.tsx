import { useState } from "react";
import logo from "@/assets/checkbox-logo.svg";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Solución", href: "#solucion" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Piloto", href: "#piloto" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="CheckBOX Vending" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          Solicitar piloto
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-6 pt-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-5 py-2.5 text-sm font-semibold rounded-md bg-foreground text-card"
          >
            Solicitar piloto
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
