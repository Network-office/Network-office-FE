import Topbar from "@/_common/_components/Topbar"
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
    queryFn: () => getChatRoomList(role)
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="relative">
        <Topbar
          title="채팅방"
          rightContent={<Topbar.AlarmLink />}
        />
        <ChatRoomListWithTabs defaultRole={role} />
      </div>
    </HydrationBoundary>
  )
}

export default ChatRoomPage
