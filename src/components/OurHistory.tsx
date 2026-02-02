/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Seção Nossa História
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Esta seção exibe a história da joalheria com:
 * - Imagem de destaque com badge de anos de tradição
 * - Texto sobre a empresa
 * - 4 cards de benefícios
 * 
 * COMO EDITAR:
 * - Modifique as constantes abaixo para alterar os textos
 * - Troque a imagem substituindo HISTORY_IMAGE
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { Award, Shield, Heart, Truck } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// TEXTOS DA SEÇÃO - Edite aqui para personalizar
// ─────────────────────────────────────────────────────────────────────────────
const SECTION_LABEL = "NOSSA HISTÓRIA";
const SECTION_TITLE = "Tradição e elegância em cada detalhe";
const SECTION_TEXT_1 = "A Delicatta nasceu do sonho de oferecer joias exclusivas que contam histórias. Há mais de uma década, selecionamos cuidadosamente cada peça para nossos clientes, garantindo qualidade, beleza e sofisticação.";
const SECTION_TEXT_2 = "Nossa missão é transformar momentos especiais em memórias eternas, através de joias que expressam amor, conquistas e elegância.";

// Anos de tradição (aparece no badge da imagem)
const YEARS_OF_TRADITION = "10+";
const YEARS_LABEL = "Anos de tradição";

// Imagem da seção (substitua pelo caminho da sua imagem)
// Opção 1: Coloque a imagem em public/images/ e use "/images/sua-imagem.jpg"
// Opção 2: Importe de src/assets e use a variável importada
const HISTORY_IMAGE = "/placeholder.svg";

// ─────────────────────────────────────────────────────────────────────────────
// BENEFÍCIOS/DIFERENCIAIS - Edite aqui para personalizar os 4 cards
// ─────────────────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Joias certificadas com garantia de autenticidade",
  },
  {
    icon: Shield,
    title: "Garantia Vitalícia",
    description: "Manutenção gratuita em todas as peças",
  },
  {
    icon: Heart,
    title: "Atendimento Especial",
    description: "Consultoria personalizada para você",
  },
  {
    icon: Truck,
    title: "Entrega Segura",
    description: "Frete grátis para todo Brasil",
  },
];

export function OurHistory() {
  return (
    <section id="nossa-historia" className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ─────────────────────────────────────────────────────────────────
           * IMAGEM COM BADGE
           * Para trocar a imagem, altere HISTORY_IMAGE acima
           * ───────────────────────────────────────────────────────────────── */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={HISTORY_IMAGE}
                alt="Joias Delicatta"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Badge de anos de tradição */}
            <div className="absolute bottom-6 right-6 rounded bg-accent px-6 py-3 text-center shadow-lg">
              <span className="block text-3xl font-bold text-accent-foreground">
                {YEARS_OF_TRADITION}
              </span>
              <span className="text-sm text-accent-foreground">
                {YEARS_LABEL}
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
           * CONTEÚDO DE TEXTO E BENEFÍCIOS
           * ───────────────────────────────────────────────────────────────── */}
          <div className="space-y-8">
            {/* Label e título */}
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-accent">
                {SECTION_LABEL}
              </span>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                {SECTION_TITLE}
              </h2>
            </div>

            {/* Textos descritivos */}
            <div className="space-y-4">
              <p className="text-primary-foreground/80">{SECTION_TEXT_1}</p>
              <p className="text-primary-foreground/80">{SECTION_TEXT_2}</p>
            </div>

            {/* ─────────────────────────────────────────────────────────────────
             * GRID DE BENEFÍCIOS (4 cards)
             * Edite o array "benefits" acima para alterar
             * ───────────────────────────────────────────────────────────────── */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-4"
                >
                  <benefit.icon className="mb-2 h-6 w-6 text-accent" />
                  <h3 className="font-semibold text-primary-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
