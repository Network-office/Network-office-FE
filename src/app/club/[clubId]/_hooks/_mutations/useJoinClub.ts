import { useMutation, useQueryClient } from "@tanstack/react-query"
import joinClub from "../../_api/joinClub"

const useJoinClub = (clubId: string) => {
  const { mutate } = useMutation({
    mutationFn: (message: string) => joinClub(clubId, message)
  })

  return { mutate }
}

export default useJoinClub
