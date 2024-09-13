import { useMutation } from "@tanstack/react-query"
import getMeetingDetail from "../../_api/getMeetingDetail"

const useGetMeetingDetail = () => {
  const { mutate } = useMutation({
    mutationFn: getMeetingDetail
  })
  return { mutate }
}

export default useGetMeetingDetail
