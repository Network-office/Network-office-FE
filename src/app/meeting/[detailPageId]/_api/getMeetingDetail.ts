import { http } from "@/lib/http"
import { MeetingDetailTypes } from "../types"

const getMeetingDetail = async (meetingId: number) => {
  try {
    const response = await http<MeetingDetailTypes>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/${meetingId}`,
      {
        cache: "no-store",
        method: "GET"
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
    throw new Error("error")
  }
}

export default getMeetingDetail
