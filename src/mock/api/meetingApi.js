import { http, HttpResponse } from "msw"
import { meetingData } from "../mockData/meetingData"
import { newParticipateData } from "../mockData/participateData"

const handlers = [
  http.get("/api/v1/gathering", ({ request }) => {
    const { searchParams } = new URL(request.url)
    const authorId = searchParams.get("authorId")

    const filteredMeetings = authorId
      ? meetingData.filter((item) => item.authorId === authorId)
      : meetingData

    return new HttpResponse(JSON.stringify({ gatherings: filteredMeetings }), {
      status: 200
    })
  }),
  http.post("/api/v1/gathering", async ({ request }) => {
    const data = await request.json()
    const meetingDataFields = [
      "title",
      "category",
      "place",
      "x",
      "y",
      "si",
      "gu",
      "dong",
      "startTime",
      "endTime",
      "date",
      "peopleNumber",
      "description"
    ]
    console.log(data)
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
  http.post(`/api/v1/gathering-user/:gatheringId`, async ({ params }) => {
    const { gatheringId } = params
    return new HttpResponse(JSON.stringify({ success: true }), {
      status: 200
    })
  }),
  http.post("/api/v1/meeting/newparticipator", async ({ request }) => {
    const { meetingId } = await request.json()

    const newParticipants = newParticipateData.filter(
      (p) => p.meetingId === meetingId
    )

    if (newParticipants.length === 0) {
      return new HttpResponse(
        JSON.stringify({ error: "새로운 참가자가 없습니다." }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" }
        }
      )
    }

    return new HttpResponse(
      JSON.stringify({
        contents: newParticipants
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    )
  }),

  http.post(
    `/api/v1/meeting/newparticipator/accept`,
    async ({ request }) => {
      const { meetingId, userId } = await request.json()

      const participantIndex = newParticipateData.findIndex(
        (p) => p.meetingId === meetingId && p.userId === userId
      )

      if (participantIndex === -1) {
        return new HttpResponse(
          JSON.stringify({ error: "해당 참가 신청자를 찾을 수 없습니다." }),
          {
            status: 400
          }
        )
      }

      const acceptedParticipant = newParticipateData.splice(
        participantIndex,
        1
      )[0]
      const meetingIndex = meetingData.findIndex((m) => m.id === meetingId)

      if (meetingIndex !== -1) {
        meetingData[meetingIndex].confirmedParticipants.push(
          acceptedParticipant
        )
        meetingData[meetingIndex].nowPeople += 1
      }

      return new HttpResponse(JSON.stringify({ success: true }), {
        status: 200
      })
    }
  ),

  http.post(
    `/api/v1/meeting/newparticipator/refuse`,
    async ({ request }) => {
      const { meetingId, userId } = await request.json()

      const participantIndex = newParticipateData.findIndex(
        (p) => p.meetingId === meetingId && p.userId === userId
      )

      if (participantIndex === -1) {
        return new HttpResponse(
          JSON.stringify({ error: "해당 참가 신청자를 찾을 수 없습니다." }),
          {
            status: 400
          }
        )
      }

      newParticipateData.splice(participantIndex, 1)

      return new HttpResponse(JSON.stringify({ success: true }), {
        status: 200
      })
    }
  ),
  http.post("/api/v1/meeting/close", async ({ request }) => {
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
  http.post(
    "/api/v1/gathering/:gatheringId/cancel",
    async ({ params, request }) => {
      const { gatheringId } = params
      const { reason } = await request.json()

      if (!gatheringId || !reason) {
        return new HttpResponse(
          JSON.stringify({ message: "유효하지 않은 요청입니다." }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        )
      }

      const meetingIndex = meetingData.findIndex(
        (meeting) => meeting.id === Number(gatheringId)
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
      meetingData[meetingIndex].cancelReason = reason

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
    }
  ),
  http.post(
    "/api/v1/meeting/:meetingId/expel",
    async ({ params, request }) => {
      const { meetingId } = params
      const { userId, reason } = await request.json()

      const meetingIndex = meetingData.findIndex(
        (meeting) => meeting.id === Number(meetingId)
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

      const participantIndex = meetingData[
        meetingIndex
      ].confirmedParticipants.findIndex(
        (participant) => participant.userId === userId
      )
      if (participantIndex === -1) {
        return new HttpResponse(
          JSON.stringify({ message: "해당 참가자를 찾을 수 없습니다." }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" }
          }
        )
      }

      meetingData[meetingIndex].confirmedParticipants.splice(
        participantIndex,
        1
      )
      meetingData[meetingIndex].nowPeople -= 1

      return new HttpResponse(
        JSON.stringify({
          message: "참가자가 성공적으로 추방되었습니다.",
          expelledUser: { userId, reason }
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      )
    }
  ),
  http.get(
    "/api/v1/meeting/participating/:userId",
    ({ params }) => {
      const userId = params.userId

      const participatingMeetings = meetingData.filter((meeting) =>
        meeting.confirmedParticipants.some(
          (participant) => participant.userId === userId
        )
      )

      const response = {
        content: participatingMeetings.map((meeting) => ({
          id: meeting.id,
          title: meeting.title,
          date: meeting.date,
          startTime: meeting.startTime,
          endTime: meeting.endTime,
          nowPeople: meeting.nowPeople,
          totalPeople: meeting.totalPeople,
          status: meeting.status,
          category: meeting.category,
          place: meeting.place,
          confirmedParticipants: meeting.confirmedParticipants
        }))
      }

      return HttpResponse.json(response, {
        status: 200
      })
    }
  ),
  http.post(
    "/api/v1/meetings/:meetingId/leave",
    async ({ params, request }) => {
      const { meetingId } = params
      const { userId } = await request.json()

      const meetingIndex = meetingData.findIndex(
        (meeting) => meeting.id === Number(meetingId)
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

      const participantIndex = meetingData[
        meetingIndex
      ].confirmedParticipants.findIndex(
        (participant) => participant.userId === userId
      )

      if (participantIndex === -1) {
        return new HttpResponse(
          JSON.stringify({ message: "해당 참가자를 찾을 수 없습니다." }),
          {
            status: 404,
            headers: { "Content-Type": "application/json" }
          }
        )
      }

      meetingData[meetingIndex].confirmedParticipants.splice(
        participantIndex,
        1
      )
      meetingData[meetingIndex].nowPeople -= 1

      return new HttpResponse(
        JSON.stringify({
          message: "모임에서 성공적으로 나갔습니다.",
          contents: {
            meetingId: meetingId,
            participantId: userId,
            status: "LEFT"
          }
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      )
    }
  )
]

export default handlers
