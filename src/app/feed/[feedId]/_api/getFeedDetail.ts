import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

const getFeedDetail = (feedId: string) => {
  try {
    const request = http(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/feed/${feedId}`,
      {
        method: "get"
      }
    )
    return request
  } catch (error) {
    throw new CustomError("network-error", 500)
  }
}

export default getFeedDetail
