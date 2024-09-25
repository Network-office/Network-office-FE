import getChatRoomList from "@/app/chat/_apis/getChatRoomList"
import { useSuspenseQuery } from "@tanstack/react-query"

const useGetChatRoomList = () => {
  useSuspenseQuery({
    queryKey: ["chatRoomList"],
    queryFn: getChatRoomList,
    select: (data) => data.data.rooms
  })
}

export default useGetChatRoomList
