import { http, HttpResponse } from "msw"
import feedMockData from "../mockData/feedData"
import commentMockData from "../mockData/commentData"
import { faker } from "@faker-js/faker"

const handler = [
  http.post(`http://localhost:8080/api/feed`, async ({ request }) => {
    const { searchParams } = new URL(request.url)
    const size = Number(searchParams.get("size") || 5)
    const page = Number(searchParams.get("page") || 0)

    const { searchRegion } = await request.json()

    const result = feedMockData.filter((item) => {
      return item.region.some((itemRegion) => itemRegion === searchRegion)
    })

    const totalCount = result.length
    const totalPages = Math.ceil(totalCount / size)

    const hasNext = page < totalPages - 1

    return new HttpResponse(
      JSON.stringify({
        feedList: result.slice(page * size, page * size + size),
        pageSize: size,
        hasNext
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  }),
  http.get(`http://localhost:8080/api/feed/:feedId`, async ({ params }) => {
    const { feedId } = params
    const result = feedMockData.find((item) => item.feedId === feedId)

    if (!result) {
      return new HttpResponse(
        JSON.stringify({ message: "해당 게시글이 존재하지 않습니다" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      )
    }

    return new HttpResponse(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  }),
  http.get(
    `http://localhost:8080/api/feed/:feedId/comments`,
    async ({ params }) => {
      const { feedId } = params
      const comments = commentMockData[feedId] || []

      return new HttpResponse(JSON.stringify(comments), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      })
    }
  ),
  http.post(
    `http://localhost:8080/api/feed/:feedId/comments/create`,
    async ({ params, request }) => {
      const { feedId } = params
      const { content } = await request.json()

      const newComment = {
        commentId: faker.string.uuid(),
        author: "주장권",
        authorProfileImage: null,
        createdAt: new Date().toISOString(),
        authorId: faker.string.uuid()
      }

      if (!commentMockData[feedId]) {
        commentMockData[feedId] = []
      }
      commentMockData[feedId].push({
        ...newComment,
        detail: content,
        authorId: faker.string.uuid() // authorId는 클라이언트에서 필요하지만 API 응답에는 포함되지 않습니다
      })

      return new HttpResponse(JSON.stringify(newComment), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      })
    }
  )
]

export default handler
