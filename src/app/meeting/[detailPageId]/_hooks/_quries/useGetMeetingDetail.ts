import { useSuspenseQuery } from "@tanstack/react-query"
import getMeetingDetail from "../../_api/getMeetingDetail"
import { MeetingDetailTypes } from "../../types"

const useGetMeetingDetail = (id: number) => {
  const { data } = useSuspenseQuery<MeetingDetailTypes>({
    queryKey: ["meetingDetail", id],
    queryFn: () => getMeetingDetail(id)
  })
  return { data }
}

export default useGetMeetingDetail
