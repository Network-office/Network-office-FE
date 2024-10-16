import { http } from "@/lib/http"

export interface ChatRoom {
  id: string
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
  totalPage: number
  hasNext: boolean
}

const getChatRoomList = async (
  role: "admin" | "user" | "all",
  size: number,
  page: number
) => {
  const response = await http<ChatRoomListResponse>(
    `http://localhost:8080/api/chat-room/${role}?size=${size}&page=${page}`,
    {
      cache: "no-store",
      method: "GET"
    }
  )

  return response
}

export default getChatRoomList