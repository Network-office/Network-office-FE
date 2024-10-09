"use client"

import ChatRoomItem from "@/app/chat/_components/ChatRoomItem"
import useGetChatRoomList from "@/app/chat/_hooks/queries/useGetChatRoomList"

interface ChatRoomListProps {
  role: "admin" | "user" | undefined
}

const ChatRoomList = ({ role }: ChatRoomListProps) => {
  const { data: rooms } = useGetChatRoomList(role)

  return (
    <div className="flex flex-col">
      {rooms?.map((room) => (
        <ChatRoomItem
          key={room.title}
          room={room}
        />
      ))}
    </div>
  )
}

export default ChatRoomList
