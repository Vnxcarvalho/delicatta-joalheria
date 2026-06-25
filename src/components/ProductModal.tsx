import { useEffect } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product, formatPrice, materialLabels, typeLabels } from "@/data/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable scroll on unmount
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 pt-8 pb-8 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-lg bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        
        <div className="aspect-square w-full overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        
        <div className="p-5 space-y-4">
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{materialLabels[product.material]}</Badge>
            <Badge variant="secondary">{typeLabels[product.type]}</Badge>
            {product.available ? (
              <Badge className="bg-green-dark text-primary-foreground">Disponível</Badge>
            ) : (
              <Badge variant="destructive">Esgotado</Badge>
            )}
          </div>

          
          <h3 className="font-serif text-xl font-bold text-card-foreground md:text-2xl">
            {product.name}
          </h3>

          
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><span className="font-semibold text-card-foreground">Material:</span> {materialLabels[product.material]}</p>
            <p><span className="font-semibold text-card-foreground">Categoria:</span> {typeLabels[product.type]}</p>
            <p><span className="font-semibold text-card-foreground">Disponibilidade:</span> {product.available ? "Em estoque" : "Indisponível"}</p>
          </div>

          
          <div className="flex items-center justify-between pt-2">
            <p className="text-2xl font-bold text-accent">
              {formatPrice(product.price)}
            </p>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={!product.available}
            >
              {product.available ? "" : "Indisponível"}
              <a
              href={"https://wa.link/mr3lkl"}
              target="_blank"
              rel="noopener noreferrer"
              >
                Consultar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
