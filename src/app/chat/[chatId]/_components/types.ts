export interface MessageBubbleProps {
  align: "left" | "right"
  text: string
}

export interface MessageProps extends Omit<MessageBubbleProps, "align"> {
  timestamp?: number
  align?: "left" | "right"
}

export interface MessageHeaderProps {
  avatarSrc: string
  username: string
  badgeText?: string
  align?: "left" | "right"
}

export interface Message {
  text: string
  timestamp?: number
}

export interface UserInfo {
  username: string
  avatarSrc: string
}

export interface MyMessageProps {
  role: "user" | "admin"
  messages: Message[]
  userInfo: UserInfo
}

export interface OtherMessageProps {
  role: "user" | "admin"
  messages: Message[]
  userInfo: UserInfo
}
