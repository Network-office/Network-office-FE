import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { FeedFormTypes } from "../types"

export interface PostFeedResponse {
  feedId: string
  title: string
  createdAt: string
  region: string
  category: string
  likes: number
  views: number
  description: string
}

export const postFeed = async (
  feedData: FeedFormTypes
): Promise<PostFeedResponse> => {
  try {
    const response = await http<PostFeedResponse>(
      `http://localhost:8080/api/feed/create`,
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
