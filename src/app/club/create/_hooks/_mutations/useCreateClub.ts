import { useMutation } from "@tanstack/react-query"
import createClub from "../../_api/createClub"

const useCreateClub = () => {
  const { mutate } = useMutation({
    mutationFn: createClub
  })

  return { mutate }
}

export default useCreateClub
