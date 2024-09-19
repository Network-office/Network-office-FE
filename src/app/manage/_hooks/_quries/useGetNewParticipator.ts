import { useQuery } from "@tanstack/react-query"
import getNewParticipator from "../../_api/getNewParticipator"

const useGetNewParticipator = () => {
  const { data } = useQuery({
    queryKey: ["newParticipator"],
    queryFn: () => getNewParticipator
  })

  return { data }
}

export default useGetNewParticipator
