import { http, HttpResponse } from "msw"
import clubData from "../mockData/clubData"

const handlers = [
  http.get(`/api/v1/club/new`, () => {
    return new HttpResponse(
      JSON.stringify({
        clubList: clubData.slice(0, 4)
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  }),
  http.get(`/api/v1/club/local`, () => {
    return new HttpResponse(
      JSON.stringify({
        clubList: clubData.slice(4, 8)
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  }),
  http.get(`/api/v1/club/:clubId`, () => {
    return new HttpResponse(
      JSON.stringify({
        clubId: "1231",
        name: "서울 독서 모임",
        images: [
          "https://picsum.photos/500/300",
          "https://picsum.photos/500/299",
          "https://picsum.photos/500/301"
        ],
        schedule: "매주 토요일 오후 2시",
        fee: "월 10,000원",
        organizer: "김철수",
        memberCount: 15,
        maxMembers: 20,
        description: "함께 책을 읽고 토론하는 즐거운 독서 모임입니다.",
        genre: "독서",
        location: {
          city: "서울시",
          district: "강남구",
          neighborhood: "역삼동"
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  }),
  http.post(`/api/v1/club/:clubId/join`, async () => {
    return new HttpResponse(
      JSON.stringify({
        success: true,
        message: `모임 생성 완료`
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  }),
  http.post(`/api/v1/club/create`, async ({ request }) => {
    const requestBody = await request.json()
    const newClubId = String(Math.floor(Math.random() * 10000))

    const newClub = {
      clubId: newClubId,
      name: requestBody.name,
      imageUrl: "https://picsum.photos/500/300",
      meetingFrequency: requestBody.schedule,
      genre: requestBody.category
    }

    clubData.push(newClub)

    return new HttpResponse(
      JSON.stringify({
        success: true,
        clubId: newClubId
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  })
]

export default handlers
