import { http, HttpResponse } from "msw"

export const handlers = [
  http.get("http://localhost:8080/test", () => {
    return HttpResponse.json(
      JSON.stringify({ testOk: true, ab: true, asdf: true }),
      { status: 200 }
    )
  })
]
