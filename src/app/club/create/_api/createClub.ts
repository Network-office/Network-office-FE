import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

interface CreateClubData {
  name: string
  category: string
  location: string
  schedule: string
  memberLimit: number
}

const createClub = async (data: CreateClubData) => {
  try {
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/club/create`)
    const result = await http<{ success: boolean; clubId: string }>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/club/create`,
      {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify(data)
      }
    )
    return result.data
  } catch (error: unknown) {
    if (error instanceof CustomError && error.response) {
      throw new CustomError(error.message, error.response.status)
    }
    throw new CustomError("Unknown Error", 500)
  }
}

export default createClub
