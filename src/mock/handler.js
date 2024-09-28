import meetingApi from "./api/meetingApi"
import userAPi from "./api/userApi"
import chatApi from "./api/chatApi"

export const handlers = [...meetingApi, ...userAPi, ...chatApi]