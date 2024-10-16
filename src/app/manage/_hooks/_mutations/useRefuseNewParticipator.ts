import { useMutation } from "@tanstack/react-query"
import refuseNewParticipator from "../../_api/refuseNewParticipator"

const useRefuseNewParticipator = () => {
  const { mutate } = useMutation({
    mutationFn: ({
      meetingId,
      userId,
      refuseText
    }: {
      meetingId: number
      userId: number
      refuseText: string
    }) => refuseNewParticipator(meetingId, userId, refuseText)
  })
  return { mutate }
}

export default useRefuseNewParticipator
