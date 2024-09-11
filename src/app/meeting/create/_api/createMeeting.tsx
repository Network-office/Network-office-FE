import { http } from "@/lib/http"
import { CreateMeetingFormTypes } from "../types"

const createMeeting = async (data: CreateMeetingFormTypes) => {
  try {
    await http(`${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/create`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify(data)
    })
    return true
  } catch (error) {
    throw new Error("error")
  }
}

export default createMeeting
