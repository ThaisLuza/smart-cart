import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types/product";
import { LazyImage } from "./LazyImage";
import { Button } from "../components/ui/button";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div 
      className="card-product p-4 group animate-fade-in cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative mb-4">
        <LazyImage
          src={product.image}
          alt={product.title}
          containerClassName="aspect-square w-full bg-secondary/30 rounded-lg p-4"
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <Button
          onClick={handleAddToCart}
          className="btn-accent absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full w-10 h-10 p-0"
          size="icon"
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <p className="font-semibold text-lg">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};