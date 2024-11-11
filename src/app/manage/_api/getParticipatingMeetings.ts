import { http } from "@/lib/http"
import { MeetingListResponse } from "@/app/meeting/types"
import CustomError from "@/lib/CustomError"

const getParticipatingMeetings = async (userId: number) => {
  try {
    const response = await http<MeetingListResponse>(
      `/api/v1/gathering/participating/${userId.toString()}`
    )
    return response.data.gatherings
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new CustomError("NotMeetingData", error.response?.data)
    } else {
      throw new CustomError("unknown Error", 500)
    }
  }
}

export default getParticipatingMeetings
