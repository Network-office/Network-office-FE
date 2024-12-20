import { cn } from "@/lib/utils"

const SkeletonLoader = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-200 rounded-lg shadow-md",
        className
      )}
    />
  )
}

export default SkeletonLoader
