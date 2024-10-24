import { getChatHistory } from "@/app/chat/[chatId]/_apis/getChatHistory"
import { useSuspenseQuery } from "@tanstack/react-query"

export const useFetchChatHistory = (chatRoomId: string) => {
  return useSuspenseQuery({
    queryKey: ["chatHistory", chatRoomId],
    queryFn: () => getChatHistory(chatRoomId)
  })
}
