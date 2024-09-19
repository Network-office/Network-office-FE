import { http, HttpResponse } from "msw"
import { meetingData } from "../mockData/meetingData"
import { participateData } from "../mockData/pariticpateData"

const handlers = [
  http.get(`http://localhost:8080/api/meeting`, () => {
    return new HttpResponse(JSON.stringify({ content: [...meetingData] }), {
      status: 200
    })
  }),

  http.get(`http://localhost:8080/api/meeting/:meetingId`, ({ params }) => {
    const meetingId = Number(params.meetingId)
    const meetingDetail = meetingData.find(
      (meetingItem) => meetingItem.id === meetingId
    )
    if (meetingDetail) {
      return new HttpResponse(JSON.stringify(meetingDetail), {
        status: 200
      })
    }
    return new HttpResponse(
      JSON.stringify({ error: "해당 모임 정보가 존재하지 않습니다." }),
      {
        status: 400
      }
    )
  }),
  http.post(
    `http://localhost:8080/api/meeting/participate`,
    async ({ request }) => {
      const result = await request.json()
      if (!meetingData.find((item) => item.id === result.meetingId)) {
        return new HttpResponse(
          JSON.stringify({ error: "해당 모임 정보가 존재하지 않습니다." }),
          {
            status: 400
          }
        )
      }
      participateData.push({ ...result, isNew: true })
      return new HttpResponse(JSON.stringify({ success: true }), {
        status: 200
      })
    }
  ),
  http.post(
    `http://localhost:8080/api/meeting/newparticipator`,
    async ({ request }) => {
      const req = await request.json()
      if (!meetingData.find((item) => item.id === req.meetingId)) {
        return new HttpResponse(
          JSON.stringify({ error: "해당 모임 정보가 존재하지 않습니다." }),
          {
            status: 400
          }
        )
      }
      const result = participateData.filter((item) => {
        return item.meetingId === req.meetingId && item.isNew === true
      })
      return new HttpResponse(JSON.stringify({ contents: result }), {
        status: 200
      })
    }
  )
]

export default handlers
