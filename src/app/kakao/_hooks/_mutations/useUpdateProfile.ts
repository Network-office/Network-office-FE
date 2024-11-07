import { http } from "@/lib/http"
import { useMutation } from "@tanstack/react-query"

export const updateProfileImage = async (image: string) => {
  try {
    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1]

    const response = await http("/api/v1/users/profile/image", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": xsrfToken || ""
      },
      body: JSON.stringify({
        profile_image_url: image
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

export const useUpdateProfileImageMutation = () => {
  return useMutation({
    mutationFn: updateProfileImage
  })
}
