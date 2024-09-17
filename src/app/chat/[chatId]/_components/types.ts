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
}

export interface SocketMessageResponse {
  id: string
  message: Omit<Message, "id">
  userInfo: {
    id: string
    username: string
    avatarSrc: string
    me: boolean
    role: "user" | "admin"
  }
}
