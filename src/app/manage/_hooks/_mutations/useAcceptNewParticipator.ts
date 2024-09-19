import { useMutation } from "@tanstack/react-query"
import acceptNewParticipator from "../../_api/acceptNewParticipator"

const useAcceptNewParticipator = (meetingId: number, userId: number) => {
  const { mutate } = useMutation({
    mutationFn: () => acceptNewParticipator(meetingId, userId)
  })
  return { mutate }
}

export default useAcceptNewParticipator
