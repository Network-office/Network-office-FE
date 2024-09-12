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
    const meetingDataFields = [
      "title",
      "category",
      "place",
      "detailPlace",
      "x",
      "y",
      "startTime",
      "endTime",
      "date",
      "peopleNumber",
      "detail"
    ]
    try {
      meetingDataFields.forEach((item) => {
        if (
          data[item] === undefined ||
          data[item] === null ||
          data[item] === ""
        ) {
          throw new Error(`필드가 유효하지 않음`)
        }
      })

      return new HttpResponse(JSON.stringify({ success: true }), {
        status: 200
      })
    } catch (error) {
      return new HttpResponse(JSON.stringify({ error: error.message }), {
        status: 400
      })
    }
  })
]

export default handlers
