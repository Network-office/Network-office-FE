import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { AcceptNewParticipatorResponse } from "../types"

const acceptNewParticipator = async (meetingId: number, userId: number) => {
  try {
    const result = await http<AcceptNewParticipatorResponse>(
      `/api/v1/gathering/newparticipator/accept`,
      {
        method: "post",
        cache: `no-store`,
        body: JSON.stringify({ meetingId, userId })
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

export default acceptNewParticipator
