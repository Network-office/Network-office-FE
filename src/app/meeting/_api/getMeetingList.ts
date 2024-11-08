import { MeetingListResponse } from "../types"
import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

const getMeetingList = async (si?: string, gu?: string, dong?: string) => {
  try {
    const response = await http<MeetingListResponse>(`/api/v1/gathering`, {
      cache: "no-store",
      method: "GET"
    })
    return response.data.gatherings
  } catch (error: unknown) {
    if (error instanceof CustomError && error.response) {
      throw new CustomError(error.message, error.response.status)
    }
    throw new CustomError("Unknown Error", 500)
  }
}

export default getMeetingList
