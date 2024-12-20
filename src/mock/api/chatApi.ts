import { GetChatHistoryResponse } from "../../app/chat/[chatId]/_apis/getChatHistory"
import { chatHistoryDataMap } from "../mockData/chatHistoryData"
import { http, HttpResponse } from "msw"

const handlers = [
  http.get(`/api/v1/chat/:chatRoomId`, ({ params }) => {
    const chatRoomId = params.chatRoomId as keyof typeof chatHistoryDataMap

    const chatHistoryData = chatHistoryDataMap[chatRoomId]

    if (!chatHistoryData) {
      return new HttpResponse(
        JSON.stringify({ message: `Chat room "${chatRoomId}" not found` }),
        {
          status: 404
        }
      )
    }

    const responseData: GetChatHistoryResponse = {
      headCount: 3,
      title: `Chat Room ${chatRoomId}`,
      messageGroupList: chatHistoryData
    }

    return new HttpResponse(JSON.stringify(responseData), {
      status: 200
    })
  })
]

export default handlers
