import { http, HttpResponse } from "msw"
import clubData from "../mockData/clubData"

const handlers = [
  http.get(`http://localhost:8080/api/club/new`, () => {
    return new HttpResponse(
      JSON.stringify({
        clubList: clubData.slice(0, 4)
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  }),
  http.get(`http://localhost:8080/api/club/local`, () => {
    return new HttpResponse(
      JSON.stringify({
        clubList: clubData.slice(4, 8)
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  })
]

export default handlers
