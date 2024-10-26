import ChatRoomItemSkeleton from "@/app/chat/_components/skeletons/ChatRoomItemSkeleton"

const ChatRoomListSkeleton = () => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 6 }).map((_, i) => (
        <ChatRoomItemSkeleton key={i} />
      ))}
    </div>
  )
}

export default ChatRoomListSkeleton
