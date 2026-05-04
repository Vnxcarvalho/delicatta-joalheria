import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product, formatPrice, materialLabels, typeLabels } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover-gold-glow"
      onClick={onClick}
    >
      
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        
        <div className="absolute right-2 top-2">
          {product.available ? (
            <Badge className="bg-green-dark text-primary-foreground">
              Disponível
            </Badge>
          ) : (
            <Badge variant="destructive">Esgotado</Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        
        <div className="mb-2 flex flex-wrap gap-1">
          <span className="inline-block rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            {materialLabels[product.material]}
          </span>
          <span className="inline-block rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            {typeLabels[product.type]}
          </span>
        </div>

        
        <h3 className="mb-2 line-clamp-2 font-medium text-card-foreground">
          {product.name}
        </h3>

        
        <p className="text-lg font-bold text-accent">
          {formatPrice(product.price)}
        </p>
      </CardContent>
    </Card>
  );
}
