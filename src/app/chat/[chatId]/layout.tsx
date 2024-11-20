import ErrorBoundary from "@/_common/_components/ErrorBoundary"
import { getQueryClient } from "@/_common/_utils/getClientQuery"
import { getChatHistory } from "@/app/chat/[chatId]/_apis/getChatHistory"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

interface ChatPageLayoutProps {
  children: React.ReactNode
  params: {
    chatId: string
  }
}

const ChatPageLayout = ({ children, params }: ChatPageLayoutProps) => {
  const chatId = params.chatId
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery({
    queryKey: ["chatHistory", chatId],
    queryFn: () => getChatHistory(chatId)
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </HydrationBoundary>
  )
}

export default ChatPageLayout
