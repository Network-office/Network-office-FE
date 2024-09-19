import { useQuery } from "@tanstack/react-query"
import getMeetingList from "@/app/meeting/_api/getMeetingList"

const getCreatedMeetingList = (authorId: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meetingList"],
    queryFn: async () => {
      const request = await getMeetingList(authorId)
      const result = request.content.map((meeting) => ({
        ...meeting,
        meetingId: meeting.id,
        date: "오늘"
      }))
      return result
    }
  })
  return { data, isLoading, isError }
}

export default getCreatedMeetingList
