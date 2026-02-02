import { useState, useMemo } from "react";
import { Header } from "../components/Header";
import { CategoryFilter } from "../components/CategoryFilter";
import { ProductCard } from "../components/ProductCard";
import { ProductGridSkeleton } from "../components/ProductSkeleton";
import { CartDrawer } from "../components/CartDrawer";
import { useProducts, useCategories } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import { toast } from "sonner";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { items, addItem, removeItem, updateQuantity, total, itemCount } = useCart();

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    
    let filtered = products;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [products, selectedCategory, searchQuery]);

  // Sugestões inteligentes baseadas no carrinho
  const suggestions = useMemo(() => {
    if (!products || items.length === 0) return [];
    
    const cartCategories = [...new Set(items.map((item) => item.category))];
    const cartIds = items.map((item) => item.id);
    
    return products
      .filter(
        (p) =>
          cartCategories.includes(p.category) && !cartIds.includes(p.id)
      )
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 4);
  }, [products, items]);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    toast.success("Adicionado ao carrinho!", {
      description: product.title.slice(0, 40) + "...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemCount={itemCount}
        onCartClick={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="container py-6">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-display font-semibold mb-2">
            Descubra nossos produtos
          </h1>
          <p className="text-muted-foreground">
            Encontre as melhores ofertas em eletrônicos, moda e mais
          </p>
        </div>

        <CategoryFilter
          categories={categories || []}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          isLoading={categoriesLoading}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {productsLoading ? (
            <ProductGridSkeleton count={8} />
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-muted-foreground">
                Nenhum produto encontrado
              </p>
            </div>
          )}
        </div>
      </main>

      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={items}
        total={total}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        suggestions={suggestions}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Index;