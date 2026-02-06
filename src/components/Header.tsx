import { useState } from "react";
import { X, Menu } from "lucide-react";
import logo from "@/assets/delicatta-logo.jpeg";

const menuItems = [
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Delicatta Joalheria"
              className="h-20 w-auto rounded-full object-cover md:h-20"
            />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-medium text-primary-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            className="text-primary-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <nav className="border-t border-primary-foreground/10 bg-primary md:hidden">
          <ul className="container mx-auto flex flex-col px-4 py-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block py-3 text-lg font-medium text-primary-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
