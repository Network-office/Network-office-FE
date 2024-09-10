import { useQuery } from "@tanstack/react-query"
import getMeetingList from "../../api/getMeetingList"

const useGetMeetingList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meetingList"],
    queryFn: getMeetingList
  })
  return { data, isLoading, isError }
}

export default useGetMeetingList
