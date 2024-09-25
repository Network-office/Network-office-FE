import { generateChatRoomListData } from "@/mock/mockData/chatRoomData"
import { http, HttpResponse } from "msw"

const handlers = [
  http.get("/api/chat-room/:role", ({ params }) => {
    // TODO: auth 로직
    // TODO: pagination 로직
    const { role } = params as { role: string }
    const isRoleValid = ["admin", "user"].includes(role)

    if (!isRoleValid) return HttpResponse.text("Invalid role")

    const chatRoomList = generateChatRoomListData(10)
    const rooms = chatRoomList.rooms.filter((room) => room.myRole === role)

    return HttpResponse.json({ rooms })
  })
]

export default handlers
