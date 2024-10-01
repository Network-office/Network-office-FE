import { useSuspenseInfiniteQuery } from "@tanstack/react-query"
import getFeedList from "../../_api/getFeedList"

const useGetFeedList = (region: string, size: number) => {
  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery({
    queryKey: ["getFeedList", region],
    queryFn: ({ pageParam = 1 }) => getFeedList(region, pageParam, size),
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.size / size + 1 : undefined
    },
    initialPageParam: 1
  })

  return { data, fetchNextPage, hasNextPage }
}

export default useGetFeedList
