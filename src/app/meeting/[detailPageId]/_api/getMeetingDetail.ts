import { http } from "@/lib/http"
import { MeetingDetailTypes } from "../types"
import CustomError from "@/lib/CustomError"

const getMeetingDetail = async (
  meetingId: number
): Promise<MeetingDetailTypes> => {
  try {
    const response = await http<MeetingDetailTypes>(
      `/api/v1/gathering/${meetingId}`,
      {
        cache: "no-store",
        method: "GET"
      }
    )

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
