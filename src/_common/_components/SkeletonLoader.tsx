const SkeletonLoader = ({ className }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded-lg ${className} shadow-md`}
    />
  )
}

export default SkeletonLoader
