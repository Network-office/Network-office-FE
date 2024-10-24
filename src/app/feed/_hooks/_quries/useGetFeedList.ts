import { useInfiniteQuery } from "@tanstack/react-query"
import getFeedList from "../../_api/getFeedList"

const useGetFeedList = (region: string, size: number) => {
  const { data, fetchNextPage, hasNextPage, isFetched, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ["getFeedList", region, size],
      queryFn: ({ pageParam = 0 }) => getFeedList(region, pageParam, size),
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.hasNext) return undefined
        return allPages.length
      },
      initialPageParam: 0,
      retry: 0,
      staleTime: 0,
      select: (data) => data?.pages.map((item) => item.feedList).flat() ?? []
    })

  return {
    data: data?.length ? data : [],
    fetchNextPage,
    hasNextPage,
    isFetched,
    isLoading,
    isError
  }
}

export default useGetFeedList
