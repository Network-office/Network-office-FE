import SkeletonLoader from "@/_common/_components/SkeletonLoader"

const ChatRoomItemSkeleton = () => {
  return (
    <div className="flex items-center p-2 justify-between bg-white border-y-2 h-[100px]">
      <div className="flex justify-start items-center gap-4">
        <div className="relative p-2">
          <SkeletonLoader className="w-12 h-12 rounded-full" />
        </div>

        <div>
          <SkeletonLoader className="w-24 h-4 mb-2" />
          <SkeletonLoader className="w-36 h-3" />
        </div>
      </div>
      <div className="flex flex-col justify-center h-full items-end">
        <SkeletonLoader className="w-16 h-3 mb-2" />
        <SkeletonLoader className="w-8 h-6 rounded-md" />
      </div>
    </div>
  )
}

export default ChatRoomItemSkeleton
