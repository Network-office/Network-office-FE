import getChatRoomList from "@/app/chat/_apis/getChatRoomList"
import { useSuspenseQuery } from "@tanstack/react-query"

const useGetChatRoomList = (role: "admin" | "user") => {
  useSuspenseQuery({
    queryKey: ["chatRoomList"],
    queryFn: () => getChatRoomList(role),
    select: (data) => data.data.rooms
  })
}

export default useGetChatRoomList
