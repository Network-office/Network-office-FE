import { chatRoomListData } from "../mockData/chatRoomData"
import { http, HttpResponse } from "msw"

const handlers = [
  http.get(
    "http://localhost:8080/api/chat-room/:role?",
    ({ params, request }) => {
      const { searchParams } = new URL(request.url)
      const size = Number(searchParams.get("size") || 5)
      const page = Number(searchParams.get("page") || 0)

      const role = params.role ? (params.role as string) : "all"

      const isRoleValid = ["admin", "user", "all"].includes(role)

      if (!isRoleValid)
        return HttpResponse.json({ message: "Invalid role" }, { status: 400 })

      const chatRoomList =
        role === "all"
          ? chatRoomListData
          : chatRoomListData.filter((room) => room.myRole === role)

      const totalPage = Math.ceil(chatRoomList.length / size)
      const hasNext = page < totalPage - 1

      const response = {
        rooms: chatRoomList.slice(size * page, size * (page + 1)),
        totalPage,
        hasNext
      }
      response.totalPage = totalPage
      response.hasNext = hasNext

      return HttpResponse.json(response)
    }
  )
]

export default handlers
