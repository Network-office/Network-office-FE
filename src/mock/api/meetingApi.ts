import { http, HttpResponse } from "msw"
import { meetingData } from "../mockData/meetingData"

const handler = [
  http.get(`http://localhost:8080/api/meeting`, () => {
    return new HttpResponse(JSON.stringify({ content: [...meetingData] }), {
      status: 200
    })
  })
]

export default handler
