import { http } from "@/lib/http"
import { MeetingDetailTypes } from "../types"
import Error from "next/error"

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
  } catch (error: Error) {
    if (error.status === 400) {
      throw new Error("NoData")
    } else {
      throw new Error("Network Error")
    }
  }
}

export default getMeetingDetail
