import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  isLoading?: boolean;
}

const categoryTranslations: Record<string, string> = {
  "all": "Todos",
  "electronics": "Eletrônicos",
  "jewelery": "Joias",
  "men's clothing": "Moda Masculina",
  "women's clothing": "Moda Feminina",
};

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  isLoading,
}: CategoryFilterProps) => {
  if (isLoading) {
    return (
      <div className="flex gap-2 py-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-24 rounded-full skeleton-shimmer bg-skeleton"
          />
        ))}
      </div>
    );
  }

  const allCategories = ["all", ...categories];

  return (
    <ScrollArea className="w-full whitespace-nowrap py-4">
      <div className="flex gap-2">
        {allCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            className={cn(
              "rounded-full px-4 transition-all duration-200",
              selectedCategory === category && "btn-accent"
            )}
            onClick={() => onSelectCategory(category)}
          >
            {categoryTranslations[category] || category}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};