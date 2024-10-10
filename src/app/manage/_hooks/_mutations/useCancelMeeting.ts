import { useMutation } from "@tanstack/react-query"
import cancelMeeting from "../../_api/cancelMeeting"

const useCancelMeeting = () => {
  const { mutate } = useMutation({
    mutationFn: cancelMeeting
  })
  return { mutate }
}

export default useCancelMeeting
