import { Message } from "@/app/chat/[chatId]/_components/Message"
import { MyMessageProps } from "@/app/chat/[chatId]/_components/types"

const MyMessages = ({ messages, timestamp }: MyMessageProps) => {
  return (
    <div className="flex flex-col gap-4 w-full pb-4">
      {messages.map((message, i) => (
        <div
          key={i}
          className="flex gap-2 justify-end">
          <Message
            align="right"
            text={message.text}
            timestamp={messages.length - 1 === i ? timestamp : undefined}
          />
        </div>
      ))}
    </div>
  )
}

export default MyMessages
