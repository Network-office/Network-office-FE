import { getChatHistory } from "@/app/chat/[chatId]/_apis/getChatHistory"
import CustomError from "@/lib/CustomError"
import { useSuspenseQuery } from "@tanstack/react-query"

export const useFetchChatHistory = (chatRoomId: string) => {
  const queryData = useSuspenseQuery({
    queryKey: ["chatHistory", chatRoomId],
    queryFn: () => getChatHistory(chatRoomId),
    select: (data) => data.data
  })

  if (queryData.error && !(queryData.error instanceof CustomError)) {
    throw new CustomError("Unknown Error", 500)
  }

  return queryData
}
