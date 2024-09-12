import { MyMessageProps } from "@/app/chat/[chatId]/_components/types"
import { MessageHeader } from "./Message/MessageHeader"
import { MessageContent } from "./Message/MessageContent"

const MyMessages = ({ messages, userInfo, role }: MyMessageProps) => {
  return (
    <div className="flex flex-col gap-4 w-full pb-4">
      <MessageHeader
        username={userInfo.username}
        avatarSrc={userInfo.avatarSrc}
        badgeText={role === "admin" ? "Admin" : ""}
        align="right"
      />
      {messages.map((message, i) => (
        <div
          key={message.id}
          className="flex gap-2 justify-end">
          <MessageContent
            align="right"
            text={message.text}
            timestamp={
              messages.length - 1 === i ? messages[i].timestamp : undefined
            }
          />
        </div>
      ))}
    </div>
  )
}

export default MyMessages
