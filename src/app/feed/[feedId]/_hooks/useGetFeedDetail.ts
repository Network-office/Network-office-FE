import { useSuspenseQuery } from "@tanstack/react-query"
import getFeedDetail from "../_api/getFeedDetail"

const useGetFeedDetail = (feedId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["feedDetail", feedId],
    queryFn: () => getFeedDetail
  })
  return { data }
}

export default useGetFeedDetail
