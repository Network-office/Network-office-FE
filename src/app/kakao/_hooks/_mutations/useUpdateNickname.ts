import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

export const updateNickname = async ({ nickname }: { nickname: string }) => {
  try {
    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1]
    const response = await http("/api/v1/users/profile/display-name", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "*",
        "Access-Control-Allow-Origin": "*",
        "X-XSRF-TOKEN": xsrfToken + ""
      },
      body: JSON.stringify({
        display_name: nickname
      })
    })

    if (response.status === 200) {
      return { data: "success" }
    }

    return response
  } catch (e) {
    throw e
  }
}

export const useUpdateNicknameMutation = () => {
  return useMutation({
    mutationFn: updateNickname
  })
}
