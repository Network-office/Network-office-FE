const StompServer = require("stomp-broker-js")
const http = require("http")
const {
  generateMyMessage,
  generateAdminMessage
} = require("./mockData/chatMessageData")

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("STOMP server is running\n")
})

const stompServer = new StompServer({
  server: server,
  path: "/ws"
})

server.listen(8090, () => {
  console.log("STOMP server is running on ws://localhost:8090/ws")
})

const sourcePath = "/topic/chat"
let roomId = ""

stompServer.subscribe("**", (req, headers) => {
  const request = JSON.parse(req)
  const response = generateMyMessage(request.text)

  roomId = headers.destination.split("/").pop()
  stompServer.send(
    `${sourcePath}/${roomId}`,
    {},
    Buffer.from(JSON.stringify(response), "utf8")
  )
})

setInterval(() => {
  const response = generateAdminMessage("Hello!")

  stompServer.send(
    `${sourcePath}/${roomId}`,
    {},
    Buffer.from(JSON.stringify(response), "utf8")
  )
}, 2000)
