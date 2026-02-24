import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Filters } from "@/components/Filters";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { products, Material, JewelryType, Product } from "@/data/products";
import { categoryImages } from "@/data/productImages";
import { ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_PRODUCTS_TO_SHOW = 12;
const PRODUCTS_PER_LOAD = 12;

// Enrich products with category images where they use placeholder
function getProductImage(product: Product): string {
  if (product.image === "/placeholder.svg") {
    return categoryImages[product.type] || product.image;
  }
  return product.image;
}

export function ProductGrid() {
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<JewelryType[]>([]);
  const [productsToShow, setProductsToShow] = useState(
    INITIAL_PRODUCTS_TO_SHOW,
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleMaterialChange = (material: Material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material],
    );
    setProductsToShow(INITIAL_PRODUCTS_TO_SHOW);
  };

  const handleTypeChange = (type: JewelryType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
    setProductsToShow(INITIAL_PRODUCTS_TO_SHOW);
  };

  const handleClearFilters = () => {
    setSelectedMaterials([]);
    setSelectedTypes([]);
    setProductsToShow(INITIAL_PRODUCTS_TO_SHOW);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesMaterial =
        selectedMaterials.length === 0 ||
        selectedMaterials.includes(product.material);
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(product.type);
      return matchesMaterial && matchesType;
    });
  }, [selectedMaterials, selectedTypes]);

  const visibleProducts = filteredProducts.slice(0, productsToShow);
  const canShowMore = productsToShow < filteredProducts.length;
  const canShowLess = productsToShow > INITIAL_PRODUCTS_TO_SHOW;

  const handleShowMore = () => {
    setProductsToShow((prev) =>
      Math.min(prev + PRODUCTS_PER_LOAD, filteredProducts.length),
    );
  };

  const handleShowLess = () => {
    setProductsToShow(INITIAL_PRODUCTS_TO_SHOW);
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="produtos" className="bg-background pt-6 pb-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nossa <span className="text-accent">Coleção</span>
          </h2>
          <p className="text-muted-foreground">
            Explore nossas joias exclusivas e encontre a peça perfeita
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <Filters
            selectedMaterials={selectedMaterials}
            selectedTypes={selectedTypes}
            onMaterialChange={handleMaterialChange}
            onTypeChange={handleTypeChange}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* Grade de Produtos */}
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{ ...product, image: getProductImage(product) }}
                onClick={() =>
                  setSelectedProduct({
                    ...product,
                    image: getProductImage(product),
                  })
                }
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              Nenhum produto encontrado com os filtros selecionados.
            </p>
          </div>
        )}

        {/* Botões Ver Mais / Ver Menos */}
        <div className="mt-10 flex justify-center gap-4 text-white">
          {canShowMore && (
            <Button
              onClick={handleShowMore}
              className="border-primary !text-white hover:bg-primary hover:!text-white"
            >
              <ChevronDown className="mr-2 h-4 w-4 !text-white" />
              Ver Mais
            </Button>
          )}
          {canShowLess && (
            <Button
              variant="outline"
              onClick={handleShowLess}
              className="border-primary !text-white hover:bg-primary hover:!text-white"
            >
              <ChevronUp className="mr-2 h-4 w-4 text-white" />
              Ver Menos
            </Button>
          )}
        </div>
      </div>

      {/* Modal do Produto */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
