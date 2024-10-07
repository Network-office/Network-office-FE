import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { FeedFormTypes } from "../types"

interface PostFeedResponse {
  feedId: string
  title: string
  category: string
  content: string
  createdAt: string
}

export const postFeed = async (
  feedData: FeedFormTypes
): Promise<PostFeedResponse> => {
  try {
    const response = await http<PostFeedResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/feed/create`,
      {
        method: "POST",
        body: JSON.stringify(feedData)
      }
    )
    return response.data
  } catch (error) {
    throw new CustomError("network-error", 500)
  }
}
