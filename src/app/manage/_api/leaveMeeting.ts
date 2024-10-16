import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { GetNewParticipatorResponse } from "../types"

export const leaveMeeting = async (userId: number, meetingId: string) => {
  try {
    const result = await http<GetNewParticipatorResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meetings/${meetingId}/leave`,
      {
        method: "post",
        cache: `no-store`,
        body: JSON.stringify({ userId: userId.toString() })
      }
    )
    return result.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new CustomError("NotMeetingData", error.response?.data)
    } else {
      throw new CustomError("unknown Error", 500)
    }
  }
}

export default leaveMeeting
