import Avatar from "@/_common/_components/Avatar"
import { generateElipsisedString } from "@/_common/_utils/generateElipsisedString"
import { generateFallbackName } from "@/_common/_utils/generateFallbackName"
import { timestampToString } from "@/_common/_utils/timestampToString"
import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"

interface ChatRoomItemProps {
  room: {
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
}

const ChatRoomItem = ({ room }: ChatRoomItemProps) => {
  const {
    myRole,
    authorInfo: { name, avatarSrc },
    title,
    currentMessage: { content, timestamp },
    unreadCount
  } = room

  const fallbackName = generateFallbackName(name)
  const elipsisedContent = generateElipsisedString(content, 30)
  const dateString = timestampToString(timestamp)

  return (
    <div className="flex items-center p-4 gap-4 bg-white border-y-2 h-[100px]">
      <div className="relative p-2">
        <Avatar
          src={avatarSrc}
          alt={name}
          fallbackName={fallbackName}
          size="lg"
        />
        {myRole === "admin" && (
          <Crown
            className="absolute top-0 right-2 text-yellow-500"
            strokeWidth={3}
            size={16}
          />
        )}
      </div>

      <div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <div className="">
          <p className="text-sm text-gray-500">{elipsisedContent}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="text-xs text-gray-500 align-top py-2 text-nowrap">
          {dateString}
        </div>
        <div className="w-full flex justify-end">
          {unreadCount && unreadCount > 0 && (
            <Badge
              className="w-fit"
              variant="destructive">
              {unreadCount}
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatRoomItem
