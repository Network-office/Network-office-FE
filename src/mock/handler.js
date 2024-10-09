import meetingApi from "./api/meetingApi"
import userAPi from "./api/userApi"
import chatApi from "./api/chatApi"
import feedApi from "./api/feedApi"

export const handlers = [...meetingApi, ...userAPi, ...chatApi, ...feedApi]
