import Avatar from "@/_common/_components/Avatar"
import {
  MessageProps,
  MessageHeaderProps,
  MessageBubbleProps
} from "@/app/chat/[chatId]/_components/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export const MessageBubble = ({ align, text }: MessageBubbleProps) => {
  const baseClasses = " relative bg-slate-300 w-fit p-2 rounded-xl text-xs"
  const triangleClasses = {
    left: "ml-4 after:top-1/2 after:-left-1.5 after:-translate-y-1/2 after:border-r-slate-300 after:border-r-8 after:border-y-transparent after:border-y-8 after:border-l-0",
    right:
      "mr-4 after:top-1/2 after:-right-1.5 after:-translate-y-1/2 after:border-l-slate-300 after:border-l-8 after:border-y-transparent after:border-y-8 after:border-r-0"
  }

  return (
    <p
      className={cn(
        baseClasses,
        triangleClasses[align],
        " after:absolute after:block after:w-0 after:h-0"
      )}>
      {text}
    </p>
  )
}

export const Message = ({ text, align = "left", timestamp }: MessageProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        align === "right" ? "items-end" : "items-start"
      )}>
      <div
        className={cn(
          "flex gap-2 items-end",
          align === "right" ? "flex-row-reverse" : ""
        )}>
        <MessageBubble
          align={align}
          text={text}
        />
        {timestamp && (
          <p className="text-xs h-fit text-slate-500">
            {new Date(timestamp).toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  )
}

export const MessageHeader = ({
  username,
  avatarSrc,
  badgeText
}: MessageHeaderProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar
        src={avatarSrc}
        fallbackName={username[0]}
        alt={username}
        size="sm"
      />
      <p>{username}</p>
      {badgeText && <Badge>{badgeText}</Badge>}
    </div>
  )
}
