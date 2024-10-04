import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { FeedCommentType } from "../types"

const getFeedComments = async (feedId: string) => {
  try {
    const request = await http<FeedCommentType[]>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/feed/${feedId}/comments`,
      {
        method: "GET"
      }
    )
    return request.data
  } catch (error) {
    throw new CustomError("network-error", 500)
  }
}

export default getFeedComments
