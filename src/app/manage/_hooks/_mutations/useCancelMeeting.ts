import { useMutation } from "@tanstack/react-query"
import cancelMeeting from "../../_api/cancelMeeting"

const useCancelMeeting = () => {
  const { mutate } = useMutation({
    mutationFn: ({
      meetingId,
      reason
    }: {
      meetingId: number
      reason: string
    }) => cancelMeeting(meetingId, reason)
  })
  return { mutate }
}

export default useCancelMeeting
