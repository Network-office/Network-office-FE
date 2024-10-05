import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

export const postFeedComment = async (feedId: string, content: string) => {
  try {
    const response = await http<{ message: string }>(
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
