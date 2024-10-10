import { http, HttpResponse } from "msw"
import { meetingData } from "../mockData/meetingData"
import { participateData } from "../mockData/participateData"

const handlers = [
  http.get(`http://localhost:8080/api/meeting`, ({ request }) => {
    const { searchParams } = new URL(request.url)
    const authorId = searchParams.get("authorId") || 0
    if (authorId) {
      return new HttpResponse(
        JSON.stringify({
          content: meetingData.filter((item) => item.authorId === authorId)
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
  ),
  http.post(
    `http://localhost:8080/api/meeting/newparticipator/accept`,
    async ({ request }) => {
      const req = await request.json()
      const acceptedMeeting = participateData.find((item) => {
        return item.meetingId === req.meetingId && item.userId === req.userId
      })
      if (acceptedMeeting) {
        acceptedMeeting.isNew = false
        return new HttpResponse(JSON.stringify({ success: true }), {
          status: 200
        })
      } else {
        return new HttpResponse(
          JSON.stringify({
            success: false,
            error: "해당 참가자가 존재하지 않습니다."
          }),
          {
            status: 400
          }
        )
      }
    }
  ),
  http.post(
    `http://localhost:8080/api/meeting/newparticipator/refuse`,
    async ({ request }) => {
      const req = await request.json()
      const acceptedMeeting = participateData.find((item) => {
        return item.meetingId === req.meetingId && item.userId === req.userId
      })
      if (acceptedMeeting) {
        acceptedMeeting.isNew = false
        return new HttpResponse(JSON.stringify({ success: true }), {
          status: 200
        })
      } else {
        return new HttpResponse(
          JSON.stringify({
            success: false,
            error: "해당 참가자가 존재하지 않습니다."
          }),
          {
            status: 400
          }
        )
      }
    }
  ),
  http.post("http://localhost:8080/api/meeting/close", async ({ request }) => {
    const { meetingId } = await request.json()

    if (!meetingId) {
      return new HttpResponse(
        JSON.stringify({ message: "유효하지 않은 모임 ID입니다." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      )
    }
    const meetingIndex = meetingData.findIndex(
      (meeting) => meeting.meetingId === meetingId
    )
    meetingData[meetingIndex].status = "모짐 마감"
    return new HttpResponse(
      JSON.stringify({ message: "모임이 성공적으로 마감되었습니다." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    )
  }),
  http.post("http://localhost:8080/api/meeting/cancel", async ({ request }) => {
    const { meetingId } = await request.json()

    if (!meetingId) {
      return new HttpResponse(
        JSON.stringify({ message: "유효하지 않은 모임 ID입니다." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      )
    }

    const meetingIndex = meetingData.findIndex(
      (meeting) => meeting.id === meetingId
    )

    if (meetingIndex === -1) {
      return new HttpResponse(
        JSON.stringify({ message: "해당 모임을 찾을 수 없습니다." }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" }
        }
      )
    }

    meetingData[meetingIndex].status = "모임 취소"

    return new HttpResponse(
      JSON.stringify({
        message: "모임이 성공적으로 취소되었습니다.",
        meeting: meetingData[meetingIndex]
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    )
  })
]

export default handlers
