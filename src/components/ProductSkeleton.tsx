export const ProductSkeleton = () => {
  return (
    <div className="card-product p-4 animate-fade-in">
      <div className="aspect-square w-full skeleton-shimmer bg-skeleton rounded-lg mb-4" />
      <div className="space-y-3">
        <div className="h-4 skeleton-shimmer bg-skeleton rounded w-3/4" />
        <div className="h-3 skeleton-shimmer bg-skeleton rounded w-1/2" />
        <div className="h-6 skeleton-shimmer bg-skeleton rounded w-1/3" />
      </div>
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 8 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </>
  );
};