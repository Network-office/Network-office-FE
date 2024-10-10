import { useMutation } from "@tanstack/react-query"
import expelParticipant from "../../_api/expelParticipant"

const useExpelParticipant = (meetingId: number) => {
  return useMutation({
    mutationFn: ({ userId, reason }: { userId: number; reason: string }) =>
      expelParticipant(meetingId, userId, reason)
  })
}

export default useExpelParticipant
