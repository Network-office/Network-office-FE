import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"
import { ClubItemTypes } from "../types"

interface GetNewClubsResponse {
  clubList: ClubItemTypes[]
}

const getNewClubs = async () => {
  try {
    const request = await http<GetNewClubsResponse>(
      `/api/v1/club/new?limit=4`,
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

export default getNewClubs
