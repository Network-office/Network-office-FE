import { useQuery } from "@tanstack/react-query"
import getUserInform from "../../_api/getUserInform"

const useGetUserInform = (userId: string) => {
  const { data } = useQuery({
    queryKey: ["userInform", userId],
    queryFn: () => getUserInform(userId)
  })
  return { data }
}

export default useGetUserInform
