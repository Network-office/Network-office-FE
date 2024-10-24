import { http } from "@/lib/http"
import { MeetingDetailTypes } from "../types"
import CustomError from "@/lib/CustomError"

const getMeetingDetail = async (
  meetingId: number
): Promise<MeetingDetailTypes> => {
  try {
    const response = await http<MeetingDetailTypes>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/${meetingId}`,
      {
        cache: "no-store",
        method: "GET"
      }
    )
    if (!response.data) {
      throw new Error("NoData")
    }
    return response.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      if (error.message === "400") {
        throw new Error("NoData")
      } else {
        throw new Error("Network Error")
      }
    }
    throw new Error("Unexpected Error")
  }
}

export default getMeetingDetail
