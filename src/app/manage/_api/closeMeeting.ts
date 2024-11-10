import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

const closeMeeting = async (meetingId: number) => {
  try {
    const result = await http<any>(
      `/api/v1/meeting/close`,
      {
        method: "post",
        cache: "no-store",
        body: JSON.stringify({ meetingId })
      }
    )
    return result.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      if (error.response?.status === 400) {
        throw new Error("InvalidMeetingId")
      }
    } else {
      throw new Error("UnknownError")
    }
  }
}

export default closeMeeting
