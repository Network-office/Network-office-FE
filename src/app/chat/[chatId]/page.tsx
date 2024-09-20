"use client"

import ChatPageTopbar from "@/app/chat/[chatId]/_components/ChatPageTopbar"
import Button from "@/_common/_components/Button"
import Input from "@/_common/_components/Input"
import { MessageGroup } from "@/app/chat/[chatId]/_apis/getChatHistory"
import MyMessageGroup from "@/app/chat/[chatId]/_components/MyMessageGroup"
import OtherMessageGroup from "@/app/chat/[chatId]/_components/OtherMessageGroup"
import { useFetchChatHistory } from "@/app/chat/[chatId]/_hooks/useFetchChatHistory"
import useStomp from "@/app/chat/[chatId]/_hooks/useStomp"
import { addMessageToGroup } from "@/app/chat/[chatId]/_utils/addMessageToGroup"
import { useEffect, useState } from "react"

interface ChatPageProps {
  params: {
    chatId: string
  }
}

const ChatPage = ({ params }: ChatPageProps) => {
  const [messageGroupList, setMessageGroupList] = useState<MessageGroup[]>([])
  const { messages, sendMessage } = useStomp(params.chatId)
  const { data, error } = useFetchChatHistory(params.chatId)

  useEffect(() => {
    if (data) {
      setMessageGroupList(data.data.messageGroupList)
    }
  }, [data])

  useEffect(() => {
    if (messages.length > 0) {
      setMessageGroupList((prev) =>
        addMessageToGroup(messages[messages.length - 1], prev)
      )
    }
  }, [messages])

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    return null
  }

  return (
    <div>
      <ChatPageTopbar title={data.data.title} />
      <div>
        <ul aria-label="메세지 리스트">
          {messageGroupList.map((messageGroup) => (
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
        <div className="flex sticky bottom-0 bg-white p-2 gap-2">
          <Input
            aria-label="메세지 입력"
            placeholder="메세지를 입력하세요"
          />
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
