import { http, HttpResponse } from "msw"
import { users } from "../mockData/commonData"

const handlers = [
  http.get("http://localhost:8080/api/user", ({ request }) => {
    const url = new URL(request.url)
    const userId = url.searchParams.get("userId")

    if (!userId) {
      return new HttpResponse(
        JSON.stringify({ message: "UserId가 필요합니다" }),
        {
          status: 400
        }
      )
    }

    const findUser = users.find((item) => item.userId === userId)

    if (!findUser) {
      return new HttpResponse(
        JSON.stringify({ message: "사용자를 찾을 수 없습니다" }),
        {
          status: 404
        }
      )
    }

    return HttpResponse.json(findUser, { status: 200 })
  })
]

export default handlers