/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Página Principal
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Esta é a página principal da landing page.
 * Todos os componentes são importados e organizados aqui.
 * 
 * ESTRUTURA DA PÁGINA:
 * 1. Header - Cabeçalho com logo e menu
 * 2. Hero - Banner principal
 * 3. ProductGrid - Grade de produtos com filtros
 * 4. About - Seção sobre a loja
 * 5. Contact - Informações de contato
 * 6. Footer - Rodapé
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { OurHistory } from "@/components/OurHistory";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────
       * CABEÇALHO
       * Contém a logo e o menu de navegação
       * Arquivo: src/components/Header.tsx
       * ───────────────────────────────────────────────────────────────── */}
      <Header />

      {/* ─────────────────────────────────────────────────────────────────
       * BANNER PRINCIPAL
       * Seção hero com título e botão de ação
       * Arquivo: src/components/Hero.tsx
       * ───────────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ─────────────────────────────────────────────────────────────────
       * GRADE DE PRODUTOS
       * Contém os filtros e os 84 produtos
       * Arquivo: src/components/ProductGrid.tsx
       * Dados: src/data/products.ts
       * ───────────────────────────────────────────────────────────────── */}
      <ProductGrid />

      {/* ─────────────────────────────────────────────────────────────────
       * SEÇÃO NOSSA HISTÓRIA
       * Informações sobre a joalheria com imagem e benefícios
       * Arquivo: src/components/OurHistory.tsx
       * ───────────────────────────────────────────────────────────────── */}
      <OurHistory />

      {/* ─────────────────────────────────────────────────────────────────
       * SEÇÃO DE CONTATO
       * Links para WhatsApp, Instagram e informações
       * Arquivo: src/components/Contact.tsx
       * ───────────────────────────────────────────────────────────────── */}
      <Contact />

      {/* ─────────────────────────────────────────────────────────────────
       * RODAPÉ
       * Logo, copyright e links
       * Arquivo: src/components/Footer.tsx
       * ───────────────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
};

export default Index;
