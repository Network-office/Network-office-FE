import { MessageHeader } from "./MessageHeader"
import { MessageContent } from "./MessageContent"
import { Message, UserInfo } from "./types"

export interface OtherMessageGroupProps {
  role: "user" | "admin"
  messages: Message[]
  userInfo: UserInfo
}

const OtherMessageGroup = ({
  role,
  userInfo: { username, avatarSrc },
  messages
}: OtherMessageGroupProps) => {
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

export default OtherMessageGroup
