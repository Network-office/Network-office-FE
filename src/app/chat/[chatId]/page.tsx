"use client"

import ChatPageTopbar from "@/app/chat/[chatId]/_components/ChatPageTopbar"
import Button from "@/_common/_components/Button"
import Input from "@/_common/_components/Input"
import { MessageGroup } from "@/app/chat/[chatId]/_apis/getChatHistory"
import MyMessageGroup from "@/app/chat/[chatId]/_components/MyMessageGroup"
import OtherMessageGroup from "@/app/chat/[chatId]/_components/OtherMessageGroup"
import { useFetchChatHistory } from "@/app/chat/[chatId]/_hooks/useFetchChatHistory"
import useStomp from "@/app/chat/[chatId]/_hooks/useStomp"
import { addMessageToChatHistory } from "@/app/chat/[chatId]/_utils/addMessageToChatHistory"
import { useEffect, useState } from "react"

interface ChatPageProps {
  params: {
    chatId: string
  }
}

const ChatPage = ({ params }: ChatPageProps) => {
  const [chatHistory, setChatHistory] = useState<MessageGroup[]>([])
  const { messages, sendMessage } = useStomp(params.chatId)
  const { data, error } = useFetchChatHistory(params.chatId)

  useEffect(() => {
    if (data) {
      setChatHistory(data.messageGroupList)
    }
  }, [data])

  useEffect(() => {
    if (messages.length > 0) {
      setChatHistory((prevChatHistory) =>
        addMessageToChatHistory(messages[messages.length - 1], prevChatHistory)
      )
    }
  }, [messages])

  return (
    <div>
      <ChatPageTopbar title={data.title ?? "title"} />
      <div>
        <ul aria-label="메세지 리스트">
          {chatHistory.map((messageGroup) => (
            <li
              aria-label="메세지 그룹"
              key={messageGroup.id}>
              {/*TODO 1분단위로 messages 묶기 */}
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
        <div className="flex sticky bottom-2 bg-white px-2 py-2 gap-2 pb-16">
          {/*TODO text area 로 수정 */}
          <Input
            aria-label="메세지 입력"
            placeholder="메세지를 입력하세요"
            className="sticky top-0"
          />
          {/*TODO submit 시 아래로 scroll*/}
          <Button
            aria-label="메세지 전송 버튼"
            onClick={() => {
              const input = document.querySelector("input")
              if (input) {
                sendMessage({ text: input.value })
                input.value = ""
              }
            }}>
            전송
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
