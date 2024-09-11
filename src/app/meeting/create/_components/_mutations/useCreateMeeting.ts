import { useMutation } from "@tanstack/react-query"
import createMeeting from "../../_api/createMeeting"

const useGetMeetingList = () => {
  const { mutate, isError } = useMutation({
    mutationFn: createMeeting,
    onSuccess: () => {
      console.log("Success")
    },
    onError: () => {
      console.error("Fail")
    }
  })

  return { mutate, isError }
}

export default useGetMeetingList
