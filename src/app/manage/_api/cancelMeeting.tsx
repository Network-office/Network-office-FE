import { http } from "@/lib/http"
import { MeetingDetailTypes } from "@/app/meeting/[detailPageId]/types"
import CustomError from "@/lib/CustomError"

const cancelMeeting = async (meetingId: number) => {
  try {
    const response = await http<MeetingDetailTypes>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/cancel`,
      {
        method: "POST",
        body: JSON.stringify({ meetingId })
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
    throw new CustomError("모임 취소에 실패했습니다.", 500)
  }
}

export default cancelMeeting
