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
  return await http<ChatRoomListResponse>(
    `/api/v1/chat-room/${role}?size=${size}&page=${page}`,
    {
      cache: "no-store",
      method: "GET"
    }
  )
}

export default getChatRoomList
