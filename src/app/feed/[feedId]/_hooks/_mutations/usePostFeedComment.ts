import { useMutation } from "@tanstack/react-query"
import { postFeedComment } from "../../_api/postFeedComment"

const usePostFeedComment = () => {
  const { mutate } = useMutation({
    mutationFn: postFeedComment
  })
  return { mutate }
}
export default usePostFeedComment
