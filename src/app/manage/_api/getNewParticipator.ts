import { http } from "@/lib/http"
import CustomError from "@/lib/CustomError"

const getNewParticipator = async () => {
  try {
    const result = await http(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/meeting/`,
      {
        method: "post",
        cache: `no-store`
      }
    )
    return result.data
  } catch (error: unknown) {
    if (error instanceof CustomError) {
    } else {
      throw new Error("unknown Error")
    }
  }
}

export default getNewParticipator
