import { Message } from "@/mock/types"

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
}

export interface MyMessageProps {
  role: "user" | "admin"
  messages: Message[]
  timestamp?: number
}

export interface OtherMessageProps {
  role: "user" | "admin"
  messages: Message[]
  timestamp?: number
}
