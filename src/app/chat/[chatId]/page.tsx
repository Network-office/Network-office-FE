"use client"

import MyMessageGroup from "@/app/chat/[chatId]/_components/MyMessageGroup"
import OtherMessageGroup from "@/app/chat/[chatId]/_components/OtherMessageGroup"
import { useFetchChatHistory } from "@/app/chat/[chatId]/_hooks/useFetchChatHistory"

interface ChatPageProps {
  params: {
    chatId: string
  }
}

const ChatPage = ({ params }: ChatPageProps) => {
  const { data, error } = useFetchChatHistory(params.chatId)

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return null
  }

  return (
    <div>
      <h1>{data.data.title}</h1>
      <ul>
        {data.data.messageGroupList.map((messageGroup) => (
          <li key={messageGroup.id}>
            {messageGroup.me ? (
              <MyMessageGroup
                role={messageGroup.role}
                messages={messageGroup.messages}
                userInfo={messageGroup.userInfo}
              />
            ) : (
              <OtherMessageGroup
                role={messageGroup.role}
                messages={messageGroup.messages}
                userInfo={messageGroup.userInfo}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChatPage
