import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

interface JoinClubResponse {
  success: boolean
  message: string
}

const joinClub = async (clubId: string, message: string) => {
  try {
    const request = await http<JoinClubResponse>(
      `/api/v1/club/${clubId}/join`,
      {
        method: "POST",
        body: JSON.stringify({ message })
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

export default joinClub
