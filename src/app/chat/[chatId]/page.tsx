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
import { useEffect, useRef, useState } from "react"
import useChatScroll from "@/app/chat/[chatId]/_hooks/useChatScroll"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"

const ChatPage = () => {
  const params = useParams() as { chatId: string }

  const [chatHistory, setChatHistory] = useState<MessageGroup[]>([])
  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    formState: { errors }
  } = useForm<{ message: string }>()
  const { messages, sendMessage } = useStomp(params.chatId)
  const { data } = useFetchChatHistory(params.chatId)

  const { bottomRef } = useChatScroll([messages])

  const onSubmit = (data: { message: string }) => {
    sendMessage({
      text: data.message,
      userId: "5909c522-8202-4ef3-9c99-e2774c673279" // TODO: Auth 로직 추가
    })
    setValue("message", "")
    setFocus("message")
  }

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
          <div ref={bottomRef} />
        </ul>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex sticky bottom-2 bg-white px-2 py-2 gap-2 pb-16">
          {/*TODO text area 로 수정 */}
          <Input
            {...register("message", { required: true })}
            aria-label="메세지 입력"
            placeholder="메세지를 입력하세요"
            className="sticky top-0"
          />
          {/*TODO submit 시 아래로 scroll*/}
          <Button
            aria-label="메세지 전송 버튼"
            disabled={!!errors.message}>
            전송
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ChatPage
