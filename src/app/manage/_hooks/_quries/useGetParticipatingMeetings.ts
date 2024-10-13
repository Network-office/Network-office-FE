import { useQuery } from "@tanstack/react-query"
import getParticipatingMeetings from "@/app/manage/_api/getParticipatingMeetings"

const useGetParticipatingMeetings = (userId: number) => {
  const { data } = useQuery({
    queryKey: ["participatingMeetingList", userId],
    queryFn: () => getParticipatingMeetings(userId)
  })
  return { data }
}

export default useGetParticipatingMeetings
