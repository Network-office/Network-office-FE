import { useMutation } from "@tanstack/react-query"
import { postFeedComment } from "../../_api/postFeedComment"

const usePostFeedComment = () => {
  const { mutate } = useMutation({
    mutationFn: ({ feedId, comment }: { feedId: string; comment: string }) =>
      postFeedComment(feedId, comment)
  })
  return { mutate }
}
export default usePostFeedComment
