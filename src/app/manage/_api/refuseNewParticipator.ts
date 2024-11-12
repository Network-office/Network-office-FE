import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { AcceptNewParticipatorResponse } from "../types"

const refuseNewParticipator = async (
  meetingId: number,
  userId: number,
  refuseText: string
) => {
  try {
    const result = await http<AcceptNewParticipatorResponse>(
      `/api/v1/gathering/newparticipator/refuse`,
      {
        method: "post",
        cache: `no-store`,
        body: JSON.stringify({ meetingId, userId, refuseText })
      }
    )
    return result.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      if (error.response?.status === 400) {
        throw new Error("NotMeetingData")
      }
    } else {
      throw new Error("unknown Error")
    }
  }
}

export default refuseNewParticipator
