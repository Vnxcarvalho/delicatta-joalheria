/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Seção Hero (Banner Principal)
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe o banner principal da página com:
 * - Frase de destaque
 * - Subtítulo
 * - Botão para ir aos produtos
 * 
 * COMO EDITAR:
 * - Para alterar os textos, modifique as constantes abaixo
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

// ─────────────────────────────────────────────────────────────────────────────
// TEXTOS DO BANNER - Edite aqui para personalizar
// ─────────────────────────────────────────────────────────────────────────────
const HERO_TITLE = "Elegância que Encanta";
const HERO_SUBTITLE = "Descubra nossa coleção exclusiva de joias artesanais, feitas com amor e dedicação para realçar sua beleza natural.";
const BUTTON_TEXT = "Ver Coleção";

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────────
       * IMAGEM DE FUNDO
       * ───────────────────────────────────────────────────────────────── */}
      <img
        src={heroImage}
        alt="Coleção de joias Delicatta"
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* ─────────────────────────────────────────────────────────────────
       * OVERLAY ESCURO
       * ───────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-primary/60" />

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        {/* ─────────────────────────────────────────────────────────────────
         * TÍTULO PRINCIPAL
         * ───────────────────────────────────────────────────────────────── */}
        <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-6xl">
          <span className="text-accent">{HERO_TITLE.split(" ")[0]}</span>{" "}
          {HERO_TITLE.split(" ").slice(1).join(" ")}
        </h1>

        {/* ─────────────────────────────────────────────────────────────────
         * SUBTÍTULO
         * ───────────────────────────────────────────────────────────────── */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
          {HERO_SUBTITLE}
        </p>

        {/* ─────────────────────────────────────────────────────────────────
         * BOTÃO DE AÇÃO
         * ───────────────────────────────────────────────────────────────── */}
        <a href="#produtos">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            {BUTTON_TEXT}
          </Button>
        </a>
      </div>
    </section>
  );
}
