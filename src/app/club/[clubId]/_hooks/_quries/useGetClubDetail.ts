import { useQuery } from "@tanstack/react-query"
import getClubDetail from "../../_api/getClubDetail"

const useGetClubDetail = (clubId: string) => {
  const { data } = useQuery({
    queryKey: ["clubDetail", clubId],
    queryFn: () => getClubDetail(clubId),
    enabled: !!clubId,
    throwOnError: true,
    retry: 2
  })
  return { data }
}

export default useGetClubDetail
