"use client"

import { useQuery } from "@tanstack/react-query"
import getUserInform from "../../_api/getUserInform"

const useGetUserInform = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["userInform", userId],
    queryFn: () => getUserInform(userId)
  })
  return { data, isLoading }
}

export default useGetUserInform
