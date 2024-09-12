import { OtherMessageProps } from "@/app/chat/[chatId]/_components/types"
import { MessageHeader } from "./Message/MessageHeader"
import { MessageContent } from "./Message/MessageContent"

const OtherMessages = ({
  role,
  userInfo: { username, avatarSrc },
  messages
}: OtherMessageProps) => {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <MessageHeader
        username={username}
        avatarSrc={avatarSrc}
        badgeText={role === "admin" ? "Admin" : ""}
      />
      {messages.map((message, i) => (
        <div
          key={message.id}
          className="flex gap-2 items-end">
          <MessageContent
            align="left"
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

export default OtherMessages
