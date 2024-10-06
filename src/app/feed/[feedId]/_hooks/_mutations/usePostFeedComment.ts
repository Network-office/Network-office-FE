import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postFeedComment } from "../../_api/postFeedComment"
import { FeedCommentType } from "@/app/feed/types"
import { useToast } from "@/_common/_hooks/useToast"

interface PostCommentResponse {
  commentId: string
  author: string
  authorProfileImage: string | null
  createdAt: string
}

const usePostFeedComment = (feedId: string) => {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  const { mutate } = useMutation<
    PostCommentResponse,
    Error,
    { comment: string }
  >({
    mutationFn: ({ comment }) => postFeedComment(feedId, comment),
    onSuccess: (data, variables) => {
      queryClient.setQueryData<FeedCommentType[]>(
        ["feedComments", feedId],
        (old) => {
          const newCommentItem: FeedCommentType = {
            commentId: data.commentId,
            author: data.author,
            authorProfileImage: data.authorProfileImage,
            detail: variables.comment,
            createdAt: data.createdAt,
            authorId: "1234"
          }
          const newComments = old ? [...old, newCommentItem] : [newCommentItem]
          return newComments
        }
      )
      window.dispatchEvent(new Event("commentAdded"))
    },
    onError: () => {
      toast({
        title: "댓글 작성 실패",
        description:
          "댓글을 작성하는 중 오류가 발생했습니다.\n 다시 시도해 주세요.",
        width: "250",
        height: "100"
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["feedComments", feedId] })
    }
  })

  return { mutate }
}

export default usePostFeedComment
