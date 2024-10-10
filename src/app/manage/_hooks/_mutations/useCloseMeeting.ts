import { useMutation } from "@tanstack/react-query"
import closeMeeting from "../../_api/closeMeeting"

const useCloseMeeting = () => {
  return useMutation({
    mutationFn: (meetingId: number) => closeMeeting(meetingId)
  })
}

export default useCloseMeeting
