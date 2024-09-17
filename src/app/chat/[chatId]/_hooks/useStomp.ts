import { Message } from "@/app/chat/[chatId]/_components/types"
import { useEffect, useRef, useState } from "react"
import { Client } from "@stomp/stompjs"

const useStomp = (chatRoomId: string) => {
  const client = useRef<Client | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    if (!client.current) {
      client.current = new Client({
        brokerURL: "ws://localhost:8080/ws",
        connectHeaders: {
          chatRoomId
        }
      })
    }

    client.current.onConnect = () => {
      client.current?.subscribe(`/topic/chat/${chatRoomId}`, (message) => {
        setMessages((prev) => [...prev, JSON.parse(message.body)])
      })
    }

    client.current.activate()
    return () => {
      client.current?.deactivate()
    }
  }, [chatRoomId])

  const sendMessage = (message: Message) => {
    client.current?.publish({
      destination: `/app/chat/${chatRoomId}`,
      body: JSON.stringify(message)
    })
  }

  return { messages, sendMessage }
}

export default useStomp
