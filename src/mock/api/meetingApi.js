import { http, HttpResponse } from "msw"
import { meetingData } from "../mockData/meetingData"

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
  })
]

export default handlers
