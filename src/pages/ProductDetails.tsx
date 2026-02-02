import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react";
import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { useCart } from "../hooks/useCart";
import { ProductGallery } from "../components/ProductGallery";
import { ProductDetailsSkeleton } from "../components/ProductDetailsSkeleton";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, isLoading, error } = useProduct(id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast.success(`${quantity}x adicionado ao carrinho!`, {
      description: product.title.slice(0, 40) + "...",
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Produto não encontrado</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para a loja
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header simples */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      <main className="container py-8">
        {isLoading ? (
          <ProductDetailsSkeleton />
        ) : product ? (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in">
            {/* Galeria de imagens */}
            <ProductGallery image={product.image} title={product.title} />

            {/* Detalhes do produto */}
            <div className="space-y-6">
              {/* Categoria e título */}
              <div className="space-y-3">
                <Badge variant="secondary" className="uppercase tracking-wider">
                  {product.category}
                </Badge>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold leading-tight">
                  {product.title}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating.rate)
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating.rate} ({product.rating.count} avaliações)
                  </span>
                </div>
              </div>

              {/* Preço */}
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  ou 12x de ${(product.price / 12).toFixed(2)} sem juros
                </p>
              </div>

              <Separator />

              {/* Descrição */}
              <div className="space-y-3">
                <h2 className="font-semibold text-lg">Descrição</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Separator />

              {/* Quantidade e ações */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">Quantidade:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none rounded-l-lg"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none rounded-r-lg"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleAddToCart}
                    className="btn-accent flex-1 h-12 text-base gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Adicionar ao carrinho
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Info adicional */}
              <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Frete grátis para compras acima de $50</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Garantia de 30 dias</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default ProductDetails;