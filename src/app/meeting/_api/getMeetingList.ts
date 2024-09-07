import { MeetingListResponse } from "../types"

const getMeetingList = async (): Promise<MeetingListResponse> => {
  try {
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting`,
      { cache: "no-store" }
    )
    if (!request.ok) {
      throw new Error("error")
    }
    const result = await request.json()
    return result
  } catch (error) {
    console.log(error)
    throw new Error("error")
  }
}

export default getMeetingList
