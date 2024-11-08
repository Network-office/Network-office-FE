import express from "express"
import { createMiddleware } from "@mswjs/http-middleware"
import cors from "cors"
import { handlers } from "./handler"

const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3000",
      "https://localhost:3000",
      "http://localhost:6006"
    ],
    optionsSuccessStatus: 200,
    credentials: true
  })
)
app.use(express.json())

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`)
  next()
})

const middleware = createMiddleware(...handlers)

app.use((req, res, next) => {
  let oldWrite = res.write
  let oldEnd = res.end
  let chunks = []

  res.write = (...args) => {
    chunks.push(Buffer.from(args[0]))
    return oldWrite.apply(res, args)
  }

  res.end = (...args) => {
    if (args[0]) {
      chunks.push(Buffer.from(args[0]))
    }

    const body = JSON.parse(Buffer.concat(chunks))

    console.log(`Response: ${res.statusCode} ${req.url} ${body}`)
    return oldEnd.apply(res, args)
  }

  middleware(req, res, next)
})

app.listen(8080, () => {
  console.log("CREATE MOCK SERVER")
})
