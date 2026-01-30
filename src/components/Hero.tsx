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

// ─────────────────────────────────────────────────────────────────────────────
// TEXTOS DO BANNER - Edite aqui para personalizar
// ─────────────────────────────────────────────────────────────────────────────
const HERO_TITLE = "Elegância que Encanta";
const HERO_SUBTITLE = "Descubra nossa coleção exclusiva de joias artesanais, feitas com amor e dedicação para realçar sua beleza natural.";
const BUTTON_TEXT = "Ver Coleção";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      {/* ─────────────────────────────────────────────────────────────────
       * ELEMENTOS DECORATIVOS DE FUNDO
       * ───────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
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
        <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
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

        {/* ─────────────────────────────────────────────────────────────────
         * ÍCONE DE SCROLL
         * ───────────────────────────────────────────────────────────────── */}
        <div className="mt-16 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-8 w-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
