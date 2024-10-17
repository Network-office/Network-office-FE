import { useQuery } from "@tanstack/react-query"
import getLocalClubs from "../../_api/getLocalClubs"

const useGetLocalClubs = () => {
  return useQuery({
    queryKey: ["useGetLocalClubs"],
    queryFn: getLocalClubs,
    throwOnError: true,
    retry: 2
  })
}

export default useGetLocalClubs
