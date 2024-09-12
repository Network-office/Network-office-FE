import { useMutation } from "@tanstack/react-query"
import createMeeting from "../../_api/createMeeting"

const useCreateMeeting = () => {
  const { mutate } = useMutation({
    mutationFn: createMeeting
  })

  return { mutate }
}

export default useCreateMeeting
