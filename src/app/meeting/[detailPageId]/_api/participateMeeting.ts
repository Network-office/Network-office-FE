import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

interface ParticipateMeetingResponse {
  success: boolean
}

const participateMeeting = async (
  meetingId: number,
  userId: number,
  message: string
) => {
  try {
    const result = await http<ParticipateMeetingResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/participate`,
      {
        cache: "no-store",
        method: "post",
        body: JSON.stringify({ meetingId, message, userId }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    if (!result.data.success) {
      throw new CustomError("NoData", 400)
    }
    return result.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      throw new CustomError("NetworkError", 400)
    } else {
      throw new CustomError("unKnowError", 500)
    }
  }
}
export default participateMeeting
