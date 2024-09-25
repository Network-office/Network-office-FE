import meetingApi from "./api/meetingApi"
import userAPi from "./api/userApi"

export const handlers = [...meetingApi, ...userAPi]
