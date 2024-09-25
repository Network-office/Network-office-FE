import { http } from "@/lib/http"

export interface ChatRoom {
  title: string
  authorInfo: {
    name: string
    avatarSrc: string
  }
  currentMessage: {
    content: string
    timestamp: string
  }
  myRole: "admin" | "user"
  unreadCount?: number
}

export interface ChatRoomListResponse {
  rooms: ChatRoom[]
}

const getChatRoomList = async () => {
  const response = await http<ChatRoomListResponse>("/api/chat-room", {
    cache: "no-store",
    method: "GET"
  })

  return response
}

export default getChatRoomList
