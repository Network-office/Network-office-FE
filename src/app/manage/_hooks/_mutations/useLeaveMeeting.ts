import { useMutation } from "@tanstack/react-query"
import leaveMeeting from "../../_api/leaveMeeting"

const useLeaveMeeting = () => {
  const { mutate } = useMutation({
    mutationFn: (meetingId: string) => leaveMeeting(meetingId)
  })
  return { mutate }
}

export default useLeaveMeeting
