import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { FeedItemTypes } from "../types"

interface GetFeedListRequest {
  feedList: FeedItemTypes[]
  size: number
  hasNext: boolean
}

const getFeedList = async (
  searchRegion: string,
  page: number,
  size: number = 10
) => {
  try {
    const request = await http<GetFeedListRequest>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/feed?page=${page.toString()}&size=${size.toString()}`,
      {
        method: "POST",
        body: JSON.stringify({ searchRegion })
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

export default getFeedList
