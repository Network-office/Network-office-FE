import { UserInformTypes } from "../types"
import CustomError from "@/lib/CustomError"
import { useGetCSRFToken } from "@/app/kakao/_api/auth/csrf"

const getUserInform = async () => {
  try {
    const xsrfToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("XSRF-TOKEN="))
      ?.split("=")[1]

    const response = await fetch(`/dev/api/v1/users/profile`, {
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

    if (!response.ok) {
      const errorData = await response.json()
      throw new CustomError(errorData.message, response.status)
    }

    const data: UserInformTypes = await response.json()
    return data
  } catch (error: unknown) {
    const getCsrf = useGetCSRFToken()
    if (error instanceof CustomError) {
      getCsrf.mutate()
      if (error.response?.status === 400) {
        throw new Error("400")
      } else if (error.response?.status === 500) {
        throw new Error("500")
      }
    } else {
      // 다른 오류에 대한 처리
      throw new Error("An unexpected error occurred")
    }
  }
}

export default getUserInform
