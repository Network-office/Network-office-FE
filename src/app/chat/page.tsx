"use client"

import ChatRoomItem from "@/app/chat/_components/ChatRoomItem"
import useGetChatRoomList from "@/app/chat/_hooks/queries/useGetChatRoomList"
import { useSearchParams } from "next/navigation"

const ChatRoomPage = () => {
  const searchParams = useSearchParams()

  const role = searchParams.get("role") as "admin" | "user" | undefined //TODO: "admin" | "user" 를 enum 으로 정의할까?
  //TODO: prefetch

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

export default ChatRoomPage
