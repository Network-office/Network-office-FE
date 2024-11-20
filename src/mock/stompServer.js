const StompServer = require("stomp-broker-js")
const http = require("http")
const { faker } = require("@faker-js/faker")

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

stompServer.subscribe("**", (msg, headers) => {
  roomId = headers.destination.split("/").pop()
  const request = JSON.parse(msg)
  console.log("Received message:", request, headers)
  const response = genResponse(request.text, true, "user", userInfo)

  stompServer.send(`${sourcePath}/${roomId}`, {}, response)
})

setInterval(() => {
  const response = genResponse("Hello!", false, "admin", adminInfo)

  stompServer.send(`${sourcePath}/${roomId}`, {}, response)
  console.log("Published message:", response)
}, 2000)

const adminInfo = {
  id: faker.string.uuid(),
  username: "admin",
  avatarSrc: faker.image.avatar()
}

const userInfo = {
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  avatarSrc: faker.image.avatar()
}

function genResponse(message, me, role, userInfo) {
  const response = {
    id: faker.string.uuid(),
    message: {
      text: message,
      timestamp: Date.now()
    },
    me,
    role,
    userInfo
  }

  return JSON.stringify(response)
}
