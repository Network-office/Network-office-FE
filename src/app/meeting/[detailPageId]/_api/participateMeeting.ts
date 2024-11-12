import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

interface ParticipateMeetingResponse {
  success: boolean
}

const participateMeeting = async (gatheringId: number, message: string) => {
  try {
    const result = await http<ParticipateMeetingResponse>(
      `/api/v1/gathering-user/${gatheringId}`,
      {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify({ message }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
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
