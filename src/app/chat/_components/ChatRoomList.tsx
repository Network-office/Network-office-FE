import useInfiniteScroll from "@/_common/_hooks/useInfiniteScroll"
import ChatRoomItem from "@/app/chat/_components/ChatRoomItem"
import useGetChatRoomList from "@/app/chat/_hooks/queries/useGetChatRoomList"
import Link from "next/link"

interface ChatRoomListProps {
  role: "admin" | "user" | "all"
}

const ChatRoomList = ({ role }: ChatRoomListProps) => {
  const { fetchNextPage, data: rooms } = useGetChatRoomList(role, 10)
  const { ref } = useInfiniteScroll(fetchNextPage)

  return (
    <div
      aria-label="chat-room-list"
      className="flex flex-col">
      {rooms?.map((room) => (
        <Link
          aria-label={`${room.title}-link`}
          key={room.title}
          href={`/chat/${room.id}`}>
          <ChatRoomItem
            key={room.title}
            room={room}
          />
        </Link>
      ))}
      <div ref={ref} />
    </div>
  )
}

export default ChatRoomList
