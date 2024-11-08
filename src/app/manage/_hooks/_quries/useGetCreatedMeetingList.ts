import { useQuery } from "@tanstack/react-query"
import getMeetingList from "@/app/meeting/_api/getMeetingList"

const useGetCreatedMeetingList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meetingList"],
    queryFn: () => getMeetingList()
  })
  return { data, isLoading, isError }
}

export default useGetCreatedMeetingList
