import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { GetNewParticipatorResponse } from "../types"

const getNewParticipator = async (meetingId: number) => {
  try {
    const result = await http<GetNewParticipatorResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/newparticipator`,
      {
        method: "post",
        cache: `no-store`,
        body: JSON.stringify({ meetingId })
      }
    )
    return result.data.contents
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

export default getNewParticipator
