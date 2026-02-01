/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Footer (Rodapé)
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe o rodapé da página.
 * 
 * COMO EDITAR:
 * - Altere o ano e nome da loja nas constantes abaixo
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURAÇÕES - Edite aqui para personalizar
// ─────────────────────────────────────────────────────────────────────────────
const STORE_NAME = "Delicatta Joalheria";
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-primary py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* ─────────────────────────────────────────────────────────────────
           * NOME E COPYRIGHT
           * ───────────────────────────────────────────────────────────────── */}
          <p className="text-sm text-primary-foreground/70">
            © {CURRENT_YEAR} {STORE_NAME}
          </p>

          {/* ─────────────────────────────────────────────────────────────────
           * LINKS DE NAVEGAÇÃO
           * ───────────────────────────────────────────────────────────────── */}
          <nav className="flex gap-6 text-sm">
            <a
              href="#produtos"
              className="text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Produtos
            </a>
            <a
              href="#sobre"
              className="text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
