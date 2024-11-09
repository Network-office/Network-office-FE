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
    id: string
    username: string
    avatarSrc: string
  }
}

export interface GetChatHistoryResponse {
  headCount: number
  title: string
  messageGroupList: MessageGroup[]
}

export const getChatHistory = async (chatRoomId: string) => {
  return await http<GetChatHistoryResponse>(`/api/chat/${chatRoomId}`, {
    method: "GET",
    cache: "no-cache"
  })
}
