import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { FeedItemTypes } from "../../types"

const getFeedDetail = async (feedId: string) => {
  try {
    const request = await http<FeedItemTypes>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/feed/${feedId}`,
      {
        method: "GET"
      }
    )
    return request.data
  } catch (error) {
    throw new CustomError("network-error", 500)
  }
}

export default getFeedDetail
