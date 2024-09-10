import { MeetingListResponse } from "../types"
import { http } from "@/lib/http"

const getMeetingList = async () => {
  try {
    const response = await http<MeetingListResponse>("/api/meeting", {
      cache: "no-store",
      method: "GET"
    })

    return response
  } catch (error) {
    console.log(error)
    throw new Error("error")
  }
}

export default getMeetingList
