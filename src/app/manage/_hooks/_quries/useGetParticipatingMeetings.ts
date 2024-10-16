import { useQuery } from "@tanstack/react-query"
import getParticipatingMeetings from "@/app/manage/_api/getParticipatingMeetings"

const useGetParticipatingMeetings = (userId: number) => {
  const { data } = useQuery({
    queryKey: ["participatingMeetings", userId],
    queryFn: () => getParticipatingMeetings(userId),
    select: (data) => data || []
  })
  return { data }
}

export default useGetParticipatingMeetings
