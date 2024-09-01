export interface MessageBubbleProps {
  align: "left" | "right"
  text: string
}

export interface MessageProps extends Omit<MessageBubbleProps, "align"> {
  timestamp: number
  isLast?: boolean
  align?: "left" | "right"
}

export interface MessageHeaderProps {
  avatarSrc: string
  username: string
  badgeText?: string
}
