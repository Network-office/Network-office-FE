import ErrorBoundary from "@/_common/_components/ErrorBoundary"
import Topbar, { AlarmLink } from "@/_common/_components/Topbar"
import { getQueryClient } from "@/_common/_utils/getClientQuery"
import getChatRoomList from "@/app/chat/_apis/getChatRoomList"
import ChatRoomListWithTabs from "@/app/chat/_components/ChatRoomListWithTabs"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"

interface ChatRoomPageProps {
  searchParams: { role?: "admin" | "user" }
}

const ChatRoomPage = ({ searchParams }: ChatRoomPageProps) => {
  const role = searchParams.role === undefined ? "all" : searchParams.role
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery({
    queryKey: ["chatRoomList", role],
    queryFn: () => getChatRoomList(role, 10, 1)
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="relative">
        <Topbar
          title="내 채팅방"
          rightContent={<AlarmLink />}
        />
        <ErrorBoundary>
          <ChatRoomListWithTabs defaultRole={role} />
        </ErrorBoundary>
      </div>
    </HydrationBoundary>
  )
}

export default ChatRoomPage
