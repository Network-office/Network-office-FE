import meetingApi from "./api/meetingApi"
import userAPi from "./api/userApi"
import chatApi from "./api/chatApi"
import feedApi from "./api/feedApi"
import chatRoomApi from "./api/chatRoomApi"

export const handlers = [
  ...meetingApi,
  ...userAPi,
  ...chatApi,
  ...feedApi,
  ...chatRoomApi
]
