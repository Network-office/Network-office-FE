import meetingApi from "./api/meetingApi"
import chatRoomApi from "./api/chatRoomApi"

export const handlers = [...meetingApi, ...chatRoomApi]
