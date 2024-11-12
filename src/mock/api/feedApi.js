import { http, HttpResponse } from "msw"
import feedMockData from "../mockData/feedData"
import commentMockData from "../mockData/commentData"
import { faker } from "@faker-js/faker"

const handler = [
  http.post(`/api/v1/feed`, async ({ request }) => {
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
  http.get(`/api/v1/feed/:feedId`, async ({ params }) => {
    const { feedId } = params
    const result = feedMockData.find((item) => item.feedId === feedId)

    if (!result) {
      return new HttpResponse(
        JSON.stringify({ message: "해당 게시글이 존재하지 않습니다" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" }
        }
      )
    }

    return new HttpResponse(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  }),
  http.get(`/api/v1/feed/:feedId/comments`, async ({ params }) => {
    const { feedId } = params
    const comments = commentMockData[feedId] || []

    return new HttpResponse(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  }),
  http.post(
    `/api/v1/feed/:feedId/comments/create`,
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
        authorId: faker.string.uuid()
      })

      return new HttpResponse(JSON.stringify(newComment), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      })
    }
  ),
  http.post(`/api/v1/feed/create`, async ({ request }) => {
    try {
      const feedData = await request.json()
      if (!feedData) {
        return new HttpResponse(
          JSON.stringify({ message: "피드 데이터가 없습니다" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        )
      }

      const createdFeed = {
        feedId: faker.string.uuid(),
        ...feedData,
        author: "주장권",
        createdAt: new Date().toISOString(),
        region: ["서울시", "구로구", "항동"],
        likes: 0,
        views: 0
      }
      feedMockData.push(createdFeed)

      return new HttpResponse(JSON.stringify({ ...createdFeed }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      })
    } catch (error) {
      return new HttpResponse(JSON.stringify({ success: false }), {
        status: 500
      })
    }
  })
]

export default handler
