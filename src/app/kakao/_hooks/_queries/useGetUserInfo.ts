import { useQuery } from "@tanstack/react-query"
import { http } from "@/lib/http"

interface GetUserInfoResponse {
  userId: number
  nickName: string
  social_id: string
  social_type: string
  profileImg: string
  phone_number: string | null
}
export const getUserInfo = async () => {
  try {
    return await http<GetUserInfoResponse>("/dev/api/v1/users/profile", {
      method: "GET",
      cache: "no-store"
    })
  } catch (e) {
    throw e
  }
}

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["/api/v1/users/profile"],
    queryFn: getUserInfo,
    staleTime: Infinity
  })
}
