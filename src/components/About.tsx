/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Seção Sobre
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe informações sobre a joalheria.
 * 
 * COMO EDITAR:
 * - Modifique as constantes abaixo para alterar os textos
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────────────────
// TEXTOS DA SEÇÃO - Edite aqui para personalizar
// ─────────────────────────────────────────────────────────────────────────────
const ABOUT_TITLE = "Sobre a Delicatta";
const ABOUT_TEXT_1 = "A Delicatta nasceu do amor pela arte de criar joias únicas e especiais. Cada peça é cuidadosamente selecionada para oferecer o melhor em qualidade, design e elegância.";
const ABOUT_TEXT_2 = "Nossa missão é proporcionar momentos especiais através de joias que contam histórias e celebram os momentos mais importantes da sua vida.";

// Destaques da loja
const highlights = [
  {
    icon: "💎",
    title: "Qualidade Premium",
    description: "Joias selecionadas com os melhores materiais",
  },
  {
    icon: "✨",
    title: "Design Exclusivo",
    description: "Peças únicas para você se destacar",
  },
  {
    icon: "🎁",
    title: "Entrega Segura",
    description: "Embalagem especial para presente",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-secondary/50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* ─────────────────────────────────────────────────────────────────
           * TÍTULO
           * ───────────────────────────────────────────────────────────────── */}
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
            {ABOUT_TITLE.split(" ")[0]}{" "}
            <span className="text-accent">
              {ABOUT_TITLE.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          {/* ─────────────────────────────────────────────────────────────────
           * TEXTOS DESCRITIVOS
           * ───────────────────────────────────────────────────────────────── */}
          <p className="mb-4 text-lg text-muted-foreground">{ABOUT_TEXT_1}</p>
          <p className="mb-12 text-lg text-muted-foreground">{ABOUT_TEXT_2}</p>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
         * DESTAQUES
         * ───────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <span className="mb-4 block text-4xl">{item.icon}</span>
              <h3 className="mb-2 font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
