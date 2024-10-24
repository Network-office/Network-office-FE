import getChatRoomList from "@/app/chat/_apis/getChatRoomList"
import { useSuspenseInfiniteQuery } from "@tanstack/react-query"

const useGetChatRoomList = (role: "admin" | "user" | "all", size: number) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["chatRoomList", role, size],
    queryFn: ({ pageParam = 0 }) => getChatRoomList(role, size, pageParam),
    initialPageParam: 0,
    retry: 0,
    staleTime: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.data.hasNext) return undefined
      return allPages.length
    },
    select: (data) => data?.pages.map((item) => item.data.rooms).flat() ?? []
  })
}

export default useGetChatRoomList
