import { MeetingListResponse } from "../types"
import { http } from "@/lib/http"

const getMeetingList = async (authorId?: number) => {
  try {
    const response = await http<MeetingListResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting${authorId ? `?authorId=${authorId}` : ""}`,
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

export default getMeetingList
