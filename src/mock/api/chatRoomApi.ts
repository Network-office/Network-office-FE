import { chatRoomListData } from "@/mock/mockData/chatRoomData"
import { http, HttpResponse } from "msw"

const handlers = [
  http.get("http://localhost:8080/api/chat-room/:role?", ({ params }) => {
    // TODO: auth 로직
    // TODO: pagination 로직

    const role = params.role ? (params.role as string) : "all"

    const isRoleValid = ["admin", "user", "all"].includes(role)

    if (!isRoleValid)
      return HttpResponse.json({ message: "Invalid role" }, { status: 400 })

    const chatRoomList = chatRoomListData
    const filterdRoomsByRole = chatRoomList.rooms.filter(
      (room) => room.myRole === role
    )

    const response =
      role === "all" ? chatRoomList : { rooms: filterdRoomsByRole }

    return HttpResponse.json(response)
  })
]

export default handlers
