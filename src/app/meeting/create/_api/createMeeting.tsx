import { http } from "@/lib/http"
import { CreateMeetingFormTypes } from "../types"

const createMeeting = async (data: CreateMeetingFormTypes) => {
  try {
    const request = await http(`http://localhost:8080/api/meeting/create`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(data)
    })
    return request.data
  } catch (error) {
    throw new Error("error")
  }
}

export default createMeeting
