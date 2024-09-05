import meetingApi from "./api/meetingApi"
import { http, HttpResponse } from "msw"

export const handlers = [
  ...meetingApi
]
