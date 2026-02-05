/*
 * ═══════════════════════════════════════════════════════════════════════════════
 * DELICATTA JOALHERIA - Grade de Produtos
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Este componente exibe a grade de produtos com:
 * - Filtros combinados
 * - Paginação "Ver mais/Ver menos"
 * - Layout responsivo
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Filters } from "@/components/Filters";
import { ProductCard } from "@/components/ProductCard";
import { products, Material, JewelryType } from "@/data/products";
import { ChevronDown, ChevronUp } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURAÇÕES - Edite aqui para alterar o comportamento
// ─────────────────────────────────────────────────────────────────────────────

// Quantidade de produtos exibidos inicialmente
const INITIAL_PRODUCTS_TO_SHOW = 12;

// Quantidade de produtos adicionados ao clicar em "Ver mais"
const PRODUCTS_PER_LOAD = 12;

export function ProductGrid() {
  // ─────────────────────────────────────────────────────────────────────────────
  // ESTADOS
  // ─────────────────────────────────────────────────────────────────────────────
  
  // Filtros selecionados
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<JewelryType[]>([]);
  
  // Controle de paginação
  const [productsToShow, setProductsToShow] = useState(INITIAL_PRODUCTS_TO_SHOW);

  // ─────────────────────────────────────────────────────────────────────────────
  // FUNÇÕES DE FILTRO
  // ─────────────────────────────────────────────────────────────────────────────

  // Toggle filtro de material
  const handleMaterialChange = (material: Material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
    setProductsToShow(INITIAL_PRODUCTS_TO_SHOW); // Reset paginação ao filtrar
  };

  // Toggle filtro de tipo
  const handleTypeChange = (type: JewelryType) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
    setProductsToShow(INITIAL_PRODUCTS_TO_SHOW); // Reset paginação ao filtrar
  };

  // Limpar todos os filtros
  const handleClearFilters = () => {
    setSelectedMaterials([]);
    setSelectedTypes([]);
    setProductsToShow(INITIAL_PRODUCTS_TO_SHOW);
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // PRODUTOS FILTRADOS
  // ─────────────────────────────────────────────────────────────────────────────
  
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Se nenhum material selecionado, aceita todos
      const matchesMaterial =
        selectedMaterials.length === 0 ||
        selectedMaterials.includes(product.material);

      // Se nenhum tipo selecionado, aceita todos
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(product.type);

      return matchesMaterial && matchesType;
    });
  }, [selectedMaterials, selectedTypes]);

  // Produtos visíveis na tela (com paginação)
  const visibleProducts = filteredProducts.slice(0, productsToShow);

  // Controle de exibição dos botões
  const canShowMore = productsToShow < filteredProducts.length;
  const canShowLess = productsToShow > INITIAL_PRODUCTS_TO_SHOW;

  // ─────────────────────────────────────────────────────────────────────────────
  // FUNÇÕES DE PAGINAÇÃO
  // ─────────────────────────────────────────────────────────────────────────────

  const handleShowMore = () => {
    setProductsToShow((prev) =>
      Math.min(prev + PRODUCTS_PER_LOAD, filteredProducts.length)
    );
  };

  const handleShowLess = () => {
    setProductsToShow(INITIAL_PRODUCTS_TO_SHOW);
    // Scroll suave para a seção de produtos
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="produtos" className="bg-background py-16">
      <div className="container mx-auto px-4">
        {/* ─────────────────────────────────────────────────────────────────
         * TÍTULO DA SEÇÃO
         * ───────────────────────────────────────────────────────────────── */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nossa <span className="text-accent">Coleção</span>
          </h2>
          <p className="text-muted-foreground">
            Explore nossas joias exclusivas e encontre a peça perfeita
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
         * FILTROS
         * ───────────────────────────────────────────────────────────────── */}
        <div className="mb-8">
          <Filters
            selectedMaterials={selectedMaterials}
            selectedTypes={selectedTypes}
            onMaterialChange={handleMaterialChange}
            onTypeChange={handleTypeChange}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* ─────────────────────────────────────────────────────────────────
         * GRADE DE PRODUTOS
         * Layout: 1 coluna mobile, 2 tablet, 3 medium, 4 desktop
         * ───────────────────────────────────────────────────────────────── */}
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              Nenhum produto encontrado com os filtros selecionados.
            </p>
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────────
         * BOTÕES VER MAIS / VER MENOS
         * ───────────────────────────────────────────────────────────────── */}
        <div className="mt-10 flex justify-center gap-4">
          {canShowMore && (
            <Button
              onClick={handleShowMore}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ChevronDown className="mr-2 h-4 w-4" />
              Ver Mais
            </Button>
          )}
          {canShowLess && (
            <Button
              variant="outline"
              onClick={handleShowLess}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronUp className="mr-2 h-4 w-4" />
              Ver Menos
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
