import { useQuery } from "@tanstack/react-query"
import getMeetingList from "../../_api/getMeetingList"

const useGetMeetingList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meetingList"],
    queryFn: async () => {
      const result = await getMeetingList()
      return result.content
    }
  })
  return { data, isLoading, isError }
}

export default useGetMeetingList
