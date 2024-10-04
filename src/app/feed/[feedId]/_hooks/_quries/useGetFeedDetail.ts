import { useSuspenseQuery } from "@tanstack/react-query"
import getFeedDetail from "../../_api/getFeedDetail"
import { FeedItemTypes } from "@/app/feed/types"

const useGetFeedDetail = (feedId: string) => {
  const { data } = useSuspenseQuery<FeedItemTypes>({
    queryKey: ["feedDetail", feedId],
    queryFn: () => getFeedDetail(feedId)
  })
  return { data }
}

export default useGetFeedDetail
