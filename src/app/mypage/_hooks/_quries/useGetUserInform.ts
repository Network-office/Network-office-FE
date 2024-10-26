"use client"

import { useQuery } from "@tanstack/react-query"
import getUserInform from "../../_api/getUserInform"

const useGetUserInform = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["userInform"],
    queryFn: () => getUserInform()
  })
  return { data, isLoading }
}

export default useGetUserInform
