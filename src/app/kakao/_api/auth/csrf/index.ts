import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

export const postCSRF = async () => {
  try {
    return http("/api/v1/csrf", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "*",
        "Access-Control-Allow-Origin": "*"
      }
    })
  } catch (e) {
    throw e
  }
}

export const useGetCSRFToken = () => {
  return useMutation({
    mutationFn: postCSRF
  })
}
