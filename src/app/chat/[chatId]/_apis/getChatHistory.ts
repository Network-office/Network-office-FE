import { http } from "@/lib/http"

export interface MessageGroup {
  id: string
  me: boolean
  role: "user" | "admin"
  messages: {
    id: string
    text: string
    timestamp: number
  }[]
  userInfo: {
    username: string
    avatarSrc: string
  }
}

export interface GetChatHistoryResponse {
  title: string
  messageGroupList: MessageGroup[]
}

export const getChatHistory = async (chatRoomId: string) => {
  return await http<GetChatHistoryResponse>(
    `http://localhost:8080/api/chat/${chatRoomId}`,
    {
      method: "GET",
      cache: "no-cache"
    }
  )
}
