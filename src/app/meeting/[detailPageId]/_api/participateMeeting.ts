import { http } from "@/lib/http"

const participateMeeting = (
  meetingId: string,
  userId: string,
  message: string
) => {
  const result = http(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/participate`,
    {
      cache: "no-store",
      method: "post",
      body: JSON.stringify({ meetingId, message, userId }),
      headers: {
        "Content-Type": "application/json"
      }
    }
  )

  return result
}
export default participateMeeting
