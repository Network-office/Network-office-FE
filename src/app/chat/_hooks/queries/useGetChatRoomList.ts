import getChatRoomList from "@/app/chat/_apis/getChatRoomList"
import { useSuspenseQuery } from "@tanstack/react-query"

const useGetChatRoomList = (role: "admin" | "user" | undefined) => {
  return useSuspenseQuery({
    queryKey: ["chatRoomList", role],
    queryFn: () => getChatRoomList(role),
    select: (data) => data.data.rooms
  })
}

export default useGetChatRoomList
