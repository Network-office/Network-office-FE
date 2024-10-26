import ErrorBoundary from "@/_common/_components/ErrorBoundary"
import ChatPageTopbar from "@/app/chat/[chatId]/_components/ChatPageTopbar"

interface ChatPageLayoutProps {
  children: React.ReactNode
}

const ChatPageLayout = ({ children }: ChatPageLayoutProps) => {
  return (
    <>
      <ChatPageTopbar title={"채팅방"} />
      <ErrorBoundary>{children}</ErrorBoundary>
    </>
  )
}

export default ChatPageLayout
