import SkeletonLoader from "@/_common/_components/SkeletonLoader"

const MyMessageGroupSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 items-end w-full">
      <div className="flex justify-end gap-2 items-center">
        <SkeletonLoader className="w-8 h-8 rounded-full" />
        <SkeletonLoader className="w-20 h-4" />
      </div>
      <div className="flex flex-col w-full items-end gap-1">
        <SkeletonLoader className="w-3/4 h-6 p-2 rounded-lg" />
        <SkeletonLoader className="w-1/3 h-4" />
      </div>
    </div>
  )
}

export default MyMessageGroupSkeleton
