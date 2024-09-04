import { Message, MessageHeader } from "@/app/chat/[chatId]/_components/Message"
import { OtherMessageProps } from "@/app/chat/[chatId]/_components/types"

const OtherMessages = ({ role, messages, timestamp }: OtherMessageProps) => {
  return (
    <div className="flex flex-col gap-4 pb-4">
      <MessageHeader
        username="You"
        avatarSrc="/images/avatar.jpg"
        badgeText={role === "admin" ? "Admin" : ""}
      />
      {messages.map((message, i) => (
        <div
          key={i}
          className="flex gap-2 items-end">
          <Message
            align="left"
            text={message.text}
            timestamp={messages.length - 1 === i ? timestamp : undefined}
          />
        </div>
      ))}
    </div>
  )
}

export default OtherMessages
