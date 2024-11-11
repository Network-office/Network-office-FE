"use client"

import { useQuery } from "@tanstack/react-query"
import getUserInform from "../../_api/getUserInform"

const useGetUserInform = () => {
  return useQuery({
    queryKey: ["userInform"],
    queryFn: () => getUserInform(),
    retry: 1
  })
}

export default useGetUserInform
