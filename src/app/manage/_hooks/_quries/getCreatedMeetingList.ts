import { useQuery } from "@tanstack/react-query"
import getMeetingList from "@/app/meeting/_api/getMeetingList"

const getCreatedMeetingList = (userId: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["meetingList"],
    queryFn: async () => {
      const request = await getMeetingList(userId)
      const result = request.content.map((meeting) => ({
        ...meeting,
        meetingId: meeting.id,
        nowPeople: meeting.vacancy,
        date: "오늘"
      }))
      return result
    }
  })
  return { data, isLoading, isError }
}

export default getCreatedMeetingList
