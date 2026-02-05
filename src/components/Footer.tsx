/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Footer (Rodapé)
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe o rodapé completo com:
 * - Logo e descrição da loja
 * - Links de navegação
 * - Categorias de produtos
 * - Informações de contato
 * - Redes sociais
 * 
 * COMO EDITAR:
 * - Altere as constantes abaixo para personalizar
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { Instagram, Facebook, MessageCircle } from "lucide-react";
import delicattaLogo from "@/assets/delicatta-logo.jpeg";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURAÇÕES - Edite aqui para personalizar
// ─────────────────────────────────────────────────────────────────────────────
const STORE_NAME = "Delicatta Joalheria";
const STORE_DESCRIPTION = "Elegância que marca momentos. Há mais de 10 anos oferecendo as melhores joias com qualidade e elegância.";
const CURRENT_YEAR = new Date().getFullYear();

// Contato
const PHONE_NUMBER = "(11) 99999-9999";
const EMAIL = "contato@delicatta.com.br";
const ADDRESS = "Rua das Joias, 123 - Centro";
const CITY = "São Paulo - SP";
const HOURS = "Seg a Sáb: 9h às 18h";

// Redes sociais
const WHATSAPP_NUMBER = "5511999999999";
const INSTAGRAM_USERNAME = "delicattajoalheria";
const FACEBOOK_USERNAME = "delicattajoalheria";

export function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  const instagramLink = `https://instagram.com/${INSTAGRAM_USERNAME}`;
  const facebookLink = `https://facebook.com/${FACEBOOK_USERNAME}`;

  return (
    <footer className="bg-primary">
      {/* ─────────────────────────────────────────────────────────────────
       * GRID PRINCIPAL
       * ───────────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* ─────────────────────────────────────────────────────────────────
           * COLUNA 1: LOGO E DESCRIÇÃO
           * ───────────────────────────────────────────────────────────────── */}
          <div>
            <img
              src={delicattaLogo}
              alt={STORE_NAME}
              className="mb-4 h-16 w-16 rounded-full object-cover"
            />
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/70">
              {STORE_DESCRIPTION}
            </p>
            <div className="flex gap-3">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
           * COLUNA 2: NAVEGAÇÃO
           * ───────────────────────────────────────────────────────────────── */}
          <div>
            <h3 className="mb-4 font-semibold text-accent">Navegação</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Sobre
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Produtos
              </a>
              <a
                href="#contato"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
           * COLUNA 3: CATEGORIAS
           * ───────────────────────────────────────────────────────────────── */}
          <div>
            <h3 className="mb-4 font-semibold text-accent">Categorias</h3>
            <nav className="flex flex-col gap-3">
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Ouro
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Prata
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Aço
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Alianças
              </a>
              <a
                href="#produtos"
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                Semijoias
              </a>
            </nav>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
           * COLUNA 4: CONTATO
           * ───────────────────────────────────────────────────────────────── */}
          <div>
            <h3 className="mb-4 font-semibold text-accent">Contato</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <p>{PHONE_NUMBER}</p>
              <p>{EMAIL}</p>
              <p>{ADDRESS}</p>
              <p>{CITY}</p>
              <p>{HOURS}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
       * COPYRIGHT
       * ───────────────────────────────────────────────────────────────── */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-primary-foreground/50">
            © {CURRENT_YEAR} {STORE_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
