import { useMutation } from "@tanstack/react-query"
import acceptNewParticipator from "../../_api/acceptNewParticipator"

const useAcceptNewParticipator = () => {
  const { mutate } = useMutation({
    mutationFn: ({
      meetingId,
      userId
    }: {
      meetingId: number
      userId: number
    }) => acceptNewParticipator(meetingId, userId)
  })
  return { mutate }
}

export default useAcceptNewParticipator
