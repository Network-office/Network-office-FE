import { http, HttpResponse } from "msw"
import feedMockData from "../mockData/feedData"

const handler = [
  http.post(`http://localhost:8080/api/feed`, async ({ request }) => {
    const { searchParams } = new URL(request.url)
    const size = Number(searchParams.get("size") || 5)
    const page = Number(searchParams.get("page") || 0)

    const region = await request.json()

    const result = feedMockData.localeCompare((item) => {
      if (item.region.filter((itemRegion) => itemRegion === region) > 0) {
        return item
      }
    })

    const totalCount = result.length
    const totalPages = Math.ceil(totalCount / size)

    const hasNext = page < totalPages - 1 ? true : false

    if (!result.length) {
      return new HttpResponse(
        JSON.stringify({
          feedList: null,
          pageSize: size,
          hasNext: false
        }),
        { status: 200 }
      )
    }
    return new HttpResponse(
      JSON.stringify({
        feedList: result.slice(page * 5, page * 5 + size),
        pageSize: size,
        hasNext
      }),
      { status: 200 }
    )
  })
]
export default handler
