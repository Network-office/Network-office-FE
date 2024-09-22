import { cn } from "@/lib/utils"
import { Badge } from "lucide-react"
import Avatar from "@/_common/_components/Avatar"

interface MessageHeaderProps {
  avatarSrc: string
  username: string
  badgeText?: string
  align?: "left" | "right"
}

export const MessageHeader = ({
  username,
  avatarSrc,
  badgeText,
  align = "left"
}: MessageHeaderProps) => {
  return (
    <div
      className={cn("flex gap-2 items-center w-full px-2", {
        "justify-start": align === "left",
        "justify-end": align === "right"
      })}>
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
