export const ProductDetailsSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 animate-fade-in">
      {/* Gallery Skeleton */}
      <div className="space-y-4">
        <div className="aspect-square skeleton-shimmer bg-skeleton rounded-2xl" />
        <div className="flex gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-20 h-20 skeleton-shimmer bg-skeleton rounded-lg" />
          ))}
        </div>
      </div>

      {/* Details Skeleton */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="h-4 w-24 skeleton-shimmer bg-skeleton rounded" />
          <div className="h-10 w-3/4 skeleton-shimmer bg-skeleton rounded" />
          <div className="h-6 w-20 skeleton-shimmer bg-skeleton rounded" />
        </div>
        <div className="h-12 w-32 skeleton-shimmer bg-skeleton rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full skeleton-shimmer bg-skeleton rounded" />
          <div className="h-4 w-full skeleton-shimmer bg-skeleton rounded" />
          <div className="h-4 w-2/3 skeleton-shimmer bg-skeleton rounded" />
        </div>
        <div className="flex gap-3 pt-4">
          <div className="h-12 flex-1 skeleton-shimmer bg-skeleton rounded-lg" />
          <div className="h-12 w-12 skeleton-shimmer bg-skeleton rounded-lg" />
        </div>
      </div>
    </div>
  );
};