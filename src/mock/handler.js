import meetingApi from "./api/meetingApi"
import chatApi from "./api/chatApi"

export const handlers = [...meetingApi, ...chatApi]
