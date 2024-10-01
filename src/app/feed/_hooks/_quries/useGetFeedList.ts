import { useInfiniteQuery } from "@tanstack/react-query"
import getFeedList from "../../_api/getFeedList"

const useGetFeedList = (region: string, size: number) => {
  const { data, fetchNextPage, hasNextPage, isFetched } = useInfiniteQuery({
    queryKey: ["getFeedList", region],
    queryFn: ({ pageParam = 0 }) => getFeedList(region, pageParam, size),
    getNextPageParam: (lastPage, _, pageParam) => {
      if (!lastPage.hasNext) return null
      return pageParam + 1
    },
    initialPageParam: 0
  })
  const refetch = () => {
    if (isFetched && hasNextPage) fetchNextPage()
  }

  return {
    data: data?.pages
      .map((item) => item.feedList)
      .flat()
      .filter((item) => item != null).length
      ? data?.pages.map((item) => item.feedList).flat()
      : [],
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetched
  }
}

export default useGetFeedList
