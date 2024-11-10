import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { FeedItemTypes } from "../../types"

const getFeedDetail = async (feedId: string) => {
  try {
    const request = await http<FeedItemTypes>(
      `/api/v1/feed/${feedId}`,
      {
        method: "GET"
      }
    )
    return request.data
  } catch (error: unknown) {
    if (error instanceof CustomError && error.response) {
      throw new CustomError(error.message, error.response.status)
    }
    throw new CustomError("Unknown Error", 500)
  }
}

export default getFeedDetail
