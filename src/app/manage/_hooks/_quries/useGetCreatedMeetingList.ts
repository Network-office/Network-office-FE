import { useQuery } from "@tanstack/react-query"
import getCreatingMeetings from "@/app/manage/_api/getCreateingMeeting"

const useGetCreatedMeetingList = (userId: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["createdMeetingList", userId],
    queryFn: () => getCreatingMeetings(userId)
  })
  return { data, isLoading, isError }
}

export default useGetCreatedMeetingList
