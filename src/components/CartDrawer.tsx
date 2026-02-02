import { X, Minus, Plus, Trash2, ShoppingBag, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";
import { CartItem, Product } from "@/types/product";
import { LazyImage } from "./LazyImage";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  total: number;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  suggestions?: Product[];
  onAddToCart: (product: Product) => void;
}

export const CartDrawer = ({
  open,
  onOpenChange,
  items,
  total,
  onUpdateQuantity,
  onRemoveItem,
  suggestions = [],
  onAddToCart,
}: CartDrawerProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Seu Carrinho
            {items.length > 0 && (
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-accent text-accent-foreground">
                {items.length} {items.length === 1 ? "item" : "itens"}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium mb-2">Carrinho vazio</h3>
            <p className="text-sm text-muted-foreground">
              Adicione produtos para começar suas compras
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 animate-fade-in">
                    <div className="w-20 h-20 rounded-lg bg-secondary/30 p-2 flex-shrink-0">
                      <LazyImage
                        src={item.image}
                        alt={item.title}
                        containerClassName="w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm font-semibold mb-2">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {suggestions.length > 0 && (
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <h4 className="text-sm font-medium">Você também pode gostar</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {suggestions.slice(0, 4).map((product) => (
                      <div
                        key={product.id}
                        className="p-3 rounded-lg bg-secondary/30 cursor-pointer hover:bg-secondary/50 transition-colors"
                        onClick={() => onAddToCart(product)}
                      >
                        <div className="w-full aspect-square mb-2 p-2">
                          <LazyImage
                            src={product.image}
                            alt={product.title}
                            containerClassName="w-full h-full"
                          />
                        </div>
                        <p className="text-xs line-clamp-1">{product.title}</p>
                        <p className="text-xs font-semibold">${product.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ScrollArea>

            <div className="pt-4 mt-4 border-t space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-lg">${total.toFixed(2)}</span>
              </div>
              <Button className="btn-accent w-full h-12 text-base font-medium">
                Finalizar Compra
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Frete e impostos calculados no checkout
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};