import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

interface PostCommentResponse {
  commentId: string
  author: string
  authorProfileImage: string | null
  createdAt: string
  authorId: string
}

export const postFeedComment = async (
  feedId: string,
  content: string
): Promise<PostCommentResponse> => {
  try {
    const response = await http<PostCommentResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/feed/${feedId}/comments/create`,
      {
        method: "POST",
        body: JSON.stringify({ content })
      }
    )
    return response.data
  } catch (error) {
    throw new CustomError("network-error", 500)
  }
}
