import { useSuspenseQuery } from "@tanstack/react-query"
import getFeedComments from "../../_api/getCommentList"
import { FeedCommentType } from "@/app/feed/types"

const useGetFeedComments = (feedId: string) => {
  const { data } = useSuspenseQuery<FeedCommentType[]>({
    queryKey: ["feedComments", feedId],
    queryFn: () => getFeedComments(feedId)
  })
  return { data }
}

export default useGetFeedComments
