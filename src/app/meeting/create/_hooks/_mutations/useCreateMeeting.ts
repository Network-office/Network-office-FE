import { useMutation } from "@tanstack/react-query"
import createMeeting from "../../_api/createMeeting"

const useCreateMeeting = () => {
  const { mutate, isError } = useMutation({
    mutationFn: createMeeting
  })

  return { mutate, isError }
}

export default useCreateMeeting
