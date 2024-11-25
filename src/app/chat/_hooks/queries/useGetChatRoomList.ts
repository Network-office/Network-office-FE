import getChatRoomList from "@/app/chat/_apis/getChatRoomList"
import CustomError from "@/lib/CustomError"

import { useSuspenseQuery } from "@tanstack/react-query"

const useGetChatRoomList = (role: "admin" | "user" | "all") => {
  const queryData = useSuspenseQuery({
    queryKey: ["chatRoomList", role],
    queryFn: ({ pageParam = 0 }) => getChatRoomList(role),
    select: (data) => data?.data.rooms
  })

  if (queryData.error && !(queryData.error instanceof CustomError)) {
    throw new CustomError("Unknown Error", 500)
  }

  return queryData
}

export default useGetChatRoomList
