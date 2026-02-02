import { useState } from "react";
import { LazyImage } from "./LazyImage";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  image: string;
  title: string;
}

export const ProductGallery = ({ image, title }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Simulando múltiplas imagens para galeria (a API só tem uma)
  const images = [image, image, image, image];

  return (
    <div className="space-y-4">
      {/* Imagem principal */}
      <div className="relative aspect-square bg-secondary/30 rounded-2xl overflow-hidden">
        <LazyImage
          src={images[selectedIndex]}
          alt={title}
          containerClassName="w-full h-full"
          className="object-contain p-8"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200",
              selectedIndex === index
                ? "border-primary ring-2 ring-primary/20"
                : "border-border hover:border-primary/50"
            )}
          >
            <LazyImage
              src={img}
              alt={`${title} - ${index + 1}`}
              containerClassName="w-full h-full"
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
};