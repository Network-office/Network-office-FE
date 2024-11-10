import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { ClubItemTypes } from "../types"

interface GetLocalClubsResponse {
  clubList: ClubItemTypes[]
}

const getLocalClubs = async () => {
  try {
    const response = await http<GetLocalClubsResponse>(
      `/api/v1/club/local`,
      {
        method: "GET"
      }
    )

    return response.data
  } catch (error: unknown) {
    if (error instanceof CustomError && error.response) {
      throw new CustomError(error.message, error.response.status)
    }
    throw new CustomError("Unknown Error", 500)
  }
}

export default getLocalClubs
