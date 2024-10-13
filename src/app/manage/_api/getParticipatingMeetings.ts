import { http } from "@/lib/http"
import { MeetingListResponse } from "@/app/meeting/types"

const getParticipatingMeetings = async (userId: number) => {
  try {
    const response = await http<MeetingListResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/participating/${userId}`
    )
    return response.data.content
  } catch (error) {
    console.error("참여 중인 모임 목록 조회 실패:", error)
    throw error
  }
}

export default getParticipatingMeetings
