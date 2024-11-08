import { http } from "@/lib/http"
import { CreateMeetingFormTypes } from "../types"
import CustomError from "@/lib/CustomError"

interface CreateMeetingResponse {
  error: string
  success: boolean
}

const createMeeting = async (data: CreateMeetingFormTypes) => {
  try {
    const request = await http<CreateMeetingResponse>("/api/v1/gathering", {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(data)
    })

    return request.data
  } catch (error: unknown) {
    if (error instanceof CustomError && error.response) {
      throw new CustomError(error.message, error.response.status)
    }
    throw new CustomError("Unknown Error", 500)
  }
}

export default createMeeting
