import { UserInformTypes } from "../types"
import CustomError from "@/lib/CustomError"
import { postCSRF, useGetCSRFToken } from "@/app/kakao/_api/auth/csrf"
import { http } from "@/lib/http"

export const useUserInform = () => {
  const { mutate: refreshCSRFToken } = useGetCSRFToken()

  return { refreshCSRFToken }
}

const getUserInform = async (onCSRFError?: () => void) => {
  try {
    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1]

    const response = await http<UserInformTypes>(`/api/v1/users/profile`, {
      cache: "no-store",
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "*",
        "Access-Control-Allow-Origin": "*",
        "X-XSRF-TOKEN": xsrfToken + ""
      }
    })

    return response.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      onCSRFError?.()

      if (error.response?.status === 401) {
        await postCSRF()
        throw new Error("400")
      } else if (error.response?.status === 500) {
        throw new Error("500")
      }
    }
    throw new Error("An unexpected error occurred")
  }
}

export default getUserInform
