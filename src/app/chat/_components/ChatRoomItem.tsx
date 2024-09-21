import Avatar from "@/_common/_components/Avatar"
import { generateElipsisedString } from "@/_common/_utils/generateElipsisedString"
import { generateFallbackName } from "@/_common/_utils/generateFallbackName"
import { timestampToString } from "@/_common/_utils/timestampToString"
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
    badge: "admin" | "user"
  }
}

const ChatRoomItem = ({ room }: ChatRoomItemProps) => {
  const {
    badge,
    authorInfo: { name, avatarSrc },
    title,
    currentMessage: { content, timestamp }
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
          size="sm"
        />
        {badge === "admin" && (
          <Crown className="absolute top-0 right-2 w-4 h-4 text-yellow-500" />
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
      <span className="text-xs text-gray-500 h-full align-top py-2 text-nowrap">
        {dateString}
      </span>
    </div>
  )
}

export default ChatRoomItem
