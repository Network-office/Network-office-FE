import { generateChatRoomListData } from "@/mock/mockData/chatRoomData"
import { http, HttpResponse } from "msw"

const handlers = [
  http.get("/api/chat-room", () => {
    // TODO: auth 로직
    // TODO: pagination 로직
    return HttpResponse.json({ rooms: generateChatRoomListData(10) })
  })
]

export default handlers
