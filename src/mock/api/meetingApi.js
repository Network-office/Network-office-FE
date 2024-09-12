import { http, HttpResponse } from "msw"
import { meetingData } from "../mockData/meetingData"
import { participateData } from "../mockData/pariticpateData"

const handlers = [
  http.get(`http://localhost:8080/api/meeting`, ({ request }) => {
    const { searchParams } = new URL(request.url)
    const authorId = searchParams.get("authorId") || 0
    if (authorId) {
      return new HttpResponse(
        JSON.stringify({
          content: meetingData.filter(
            (item) => item.authorId === parseInt(authorId)
          )
        }),
        {
          status: 200
        }
      )
    }
    return new HttpResponse(JSON.stringify({ content: [...meetingData] }), {
      status: 200
    })
  }),
  http.post(`http://localhost:8080/api/meeting/create`, async ({ request }) => {
    const data = await request.json()
    meetingData.push(data)
    return new HttpResponse(JSON.stringify({ success: true }), {
      status: 200
    })
  })
]

export default handlers
