import { useQuery } from "@tanstack/react-query"
import getNewParticipator from "../../_api/getNewParticipator"

const useGetNewParticipator = (meetingId: number) => {
  const { data } = useQuery({
    queryKey: ["newParticipator", meetingId],
    queryFn: () => getNewParticipator(meetingId)
  })

  return { data }
}

export default useGetNewParticipator
