import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

const postCSRF = async () => {
  try {
    return http<string>("/dev/api/v1/csrf", {
      method: "POST"
    }).then((res) => console.log(res))
  } catch (e) {
    console.log(e)
    throw e
  }
}

export const useGetCSRFToken = () => {
  return useMutation({
    mutationFn: postCSRF
  })
}
