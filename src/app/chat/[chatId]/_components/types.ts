export interface Message {
  id: string
  text: string
  timestamp: number
}

export interface UserInfo {
  id: string
  username: string
  avatarSrc: string
}
export interface SocketMessageRequest {
  text: string
  userId: string
}

export interface SocketMessageResponse {
  id: string
  message: Omit<Message, "id">
  me: boolean
  role: "user" | "admin"
  userInfo: {
    id: string
    username: string
    avatarSrc: string
  }
}
