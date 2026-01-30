/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Componente Header
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe o cabeçalho da página com:
 * - Logo da Delicatta
 * - Menu de navegação
 * 
 * COMO EDITAR:
 * - Para alterar a logo, substitua o arquivo em src/assets/delicatta-logo.jpeg
 * - Para alterar os links do menu, edite o array "menuItems" abaixo
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import logo from "@/assets/delicatta-logo.jpeg";

// ─────────────────────────────────────────────────────────────────────────────
// ITENS DO MENU - Edite aqui para alterar os links de navegação
// ─────────────────────────────────────────────────────────────────────────────
const menuItems = [
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* ─────────────────────────────────────────────────────────────────
           * LOGO DA DELICATTA
           * Para alterar, substitua o arquivo em src/assets/delicatta-logo.jpeg
           * ───────────────────────────────────────────────────────────────── */}
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Delicatta Joalheria"
              className="h-12 w-auto rounded-full border-2 border-accent object-cover md:h-16"
            />
          </a>

          {/* ─────────────────────────────────────────────────────────────────
           * MENU DE NAVEGAÇÃO
           * Os links são definidos no array menuItems acima
           * ───────────────────────────────────────────────────────────────── */}
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

          {/* ─────────────────────────────────────────────────────────────────
           * MENU MOBILE (botão hamburguer)
           * ───────────────────────────────────────────────────────────────── */}
          <button className="text-primary-foreground md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
