import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { UserInformTypes } from "../types"

const getUserInform = async (userId: string) => {
  try {
    const request = await http<UserInformTypes>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user?userId=${userId}`,
      {
        cache: "no-store",
        method: "get"
      }
    )
    if (!request.data) {
      throw new Error("400")
    }
    return request.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      if (error.response?.status === 400) {
        throw new Error("400")
      } else if (error.response?.status === 500) {
        throw new Error("500")
      }
    }
    throw new Error("404")
  }
}

export default getUserInform
