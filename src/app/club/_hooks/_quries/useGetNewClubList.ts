import { useQuery } from "@tanstack/react-query"
import getNewClubs from "../../_api/getNewClubs"

const useGetNewClubs = () => {
  return useQuery({
    queryKey: ["useGetNewClubs"],
    queryFn: getNewClubs,
    throwOnError: true,
    retry: 2
  })
}

export default useGetNewClubs
