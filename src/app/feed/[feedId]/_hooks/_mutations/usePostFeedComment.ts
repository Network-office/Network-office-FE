import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postFeedComment } from "../../_api/postFeedComment"
import { FeedCommentType } from "@/app/feed/types"

interface PostCommentResponse {
  commentId: string;
  author: string;
  authorProfileImage: string | null;
  createdAt: string;
}

const usePostFeedComment = (feedId: string) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation<PostCommentResponse, Error, { comment: string }>({
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
            authorId: "1234" // 이 값이 서버에서 제공되지 않는다면, 클라이언트에서 설정해야 합니다.
          }
          const newComments = old ? [...old, newCommentItem] : [newCommentItem]
          return newComments
        }
      )
      // 댓글 추가 성공 후 이벤트를 트리거합니다.
      window.dispatchEvent(new Event('commentAdded'))
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["feedComments", feedId] })
    }
  })

  return { mutate }
}

export default usePostFeedComment
