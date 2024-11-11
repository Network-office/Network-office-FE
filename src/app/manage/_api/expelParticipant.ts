import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

const expelParticipant = async (
  meetingId: number,
  userId: string,
  reason: string
) => {
  try {
    const result = await http(
      `/api/v1/gathering/${meetingId}/expel`,
      {
        method: "POST",
        body: JSON.stringify({ userId, reason })
      }
    )
    return result.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      if (error.response?.status === 400) {
        throw new CustomError("InvalidExpelRequest", 400)
      }
    } else {
      throw new CustomError("UnknownError", 500)
    }
  }
}

export default expelParticipant
