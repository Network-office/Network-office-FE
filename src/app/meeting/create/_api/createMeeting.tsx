import { http } from "@/lib/http"
import { CreateMeetingFormTypes } from "../types"

interface CreateMeetingResponse {
  error: string
  success: boolean
}

const createMeeting = async (data: CreateMeetingFormTypes) => {
  try {
    const request = await http<CreateMeetingResponse>(
      `http://localhost:8080/api/meeting/create`,
      {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify(data)
      }
    )

    if (request.data.error) {
      throw new Error(request.data.error)
    }

    return request.data
  } catch (error) {
    throw new Error("error")
  }
}

export default createMeeting
