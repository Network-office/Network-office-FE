import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

const postCSRF = async () => {
  try {
    return fetch("/dev/api/v1/csrf", {
      method: "POST"
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
