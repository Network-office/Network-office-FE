import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

interface PostCommentParams {
  feedId: string
  content: string
}

export const postFeedComment = async ({
  feedId,
  content
}: PostCommentParams) => {
  try {
    const response = await http<{ message: string }>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/feed/${feedId}/comments`,
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
