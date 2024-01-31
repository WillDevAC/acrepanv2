import { Skeleton } from "@/components/ui/skeleton";

export function ProductListItemSkeleton() {
  return (
    <div className="flex flex-col items-center gap-3 bg-white p-5 rounded-md">
      <Skeleton className="h-3 w-[250px]" />
      <Skeleton className="h-3 w-[250px]" />
      <Skeleton className="h-3 w-[250px]" />
    </div>
  );
}
