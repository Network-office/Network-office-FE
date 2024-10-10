import { useMutation, useQueryClient } from "@tanstack/react-query"
import closeMeeting from "../../_api/closeMeeting"

const useCloseMeeting = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (meetingId: number) => closeMeeting(meetingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["createdMeetingList"] })
    }
  })
}

export default useCloseMeeting
