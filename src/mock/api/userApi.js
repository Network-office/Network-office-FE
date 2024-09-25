import { http, HttpResponse } from "msw"
import userMockData from "../mockData/userData"

const handlers = [
  http.get(`http://localhost:8080/api/user`, ({ request }) => {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId") || 0
    const findUser = userMockData.find((item) => item.userId === userId)
    if (!userId || !findUser) {
      return new HttpResponse(JSON.stringify({ messgae: "No UserId" }), {
        status: 400
      })
    }
    return new HttpResponse(JSON.stringify(findUser), { status: 200 })
  })
]
export default handlers
