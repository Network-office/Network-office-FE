import { MeetingListResponse } from "@/app/meeting/types"
import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

const getCreatingMeetings = async (userId: string) => {
  try {
    const response = await http<MeetingListResponse>(
      `/api/v1/gathering/creating/${userId}`,
      {
        cache: "no-store",
        method: "GET"
      }
    )
    return response.data.gatherings
  } catch (error: unknown) {
    if (error instanceof CustomError && error.response) {
      throw new CustomError(error.message, error.response.status)
    }
    throw new CustomError("Unknown Error", 500)
  }
}

export default getCreatingMeetings
