"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import getUserInform from "../../_api/getUserInform"

const useGetUserInform = (userId: string) => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["userInform", userId],
    queryFn: () => getUserInform(userId)
  })
  return { data, isLoading }
}

export default useGetUserInform
