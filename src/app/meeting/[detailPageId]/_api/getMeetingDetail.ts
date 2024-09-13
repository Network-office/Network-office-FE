import { http } from "@/lib/http"

const getMeetingDetail = async (meetingId: string) => {
  try {
    const response = await http(
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
