import { http, HttpResponse } from "msw"

export const handlers = [
  http.get("https://localhost:3000/user", () => {
    return HttpResponse.json(null, { status: 200 })
  })
]
