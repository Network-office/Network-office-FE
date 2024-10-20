import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { ClubDetailData } from "../types"

const getClubDetail = async (clubId: string) => {
  try {
    const request = await http<ClubDetailData>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/club/${clubId}`,
      {
        method: "GET"
      }
    )

    return request.data
  } catch (error: unknown) {
    if (error instanceof CustomError && error.response) {
      throw new CustomError(error.message, error.response.status)
    }
    throw new CustomError("Unknown Error", 500)
  }
}

export default getClubDetail
