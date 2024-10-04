import { http, HttpResponse } from "msw"
import feedMockData from "../mockData/feedData"

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
    const result = feedMockData.filter((item) => {
      return (item.feedId = feedId)
    })

    if (!result.length) {
      return new HttpResponse(
        JSON.stringify({ message: "해당 게시글이 존재하지 않습니다" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      )
    }

    return new HttpResponse(
      JSON.stringify({
        ...result[0]
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  })
]

export default handler
