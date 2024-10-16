"use client"

import ChatPageTopbar from "@/app/chat/[chatId]/_components/ChatPageTopbar"
import MyMessageGroup from "@/app/chat/[chatId]/_components/MyMessageGroup"
import OtherMessageGroup from "@/app/chat/[chatId]/_components/OtherMessageGroup"
import { useFetchChatHistory } from "@/app/chat/[chatId]/_hooks/useFetchChatHistory"

interface ChatPageProps {
  params: {
    chatId: string
  }
}

const ChatPage = ({ params }: ChatPageProps) => {
  const { data } = useFetchChatHistory(params.chatId)

  return (
    <div>
      <ChatPageTopbar title={data.data.title} />
      <ul aria-label="메세지 리스트">
        {data.data.messageGroupList.map((messageGroup) => (
          <li
            aria-label="메세지 그룹"
            key={messageGroup.id}>
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
