import MyMessages from "@/app/chat/[chatId]/_components/MyMessages"
import OtherMessages from "@/app/chat/[chatId]/_components/OtherMessages"
import { Message } from "@/mock/types"
import { faker } from "@faker-js/faker"
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test
} from "@jest/globals"
import { render, screen } from "@testing-library/react"

const generateMessage = (): Message => ({
  id: faker.string.uuid(),
  text: faker.lorem.sentence(),
  role: faker.helpers.arrayElement<"user" | "admin">(["user", "admin"]),
  createdAt: faker.date.recent().toISOString(),
  me: faker.datatype.boolean()
})

let messages: Message[]
messages = Array.from({ length: 5 }, generateMessage)

describe("MyMessages", () => {
  let myMessages: Message[]

  let adminMessages: Message[]
  let userMessages: Message[]

  beforeEach(() => {
    myMessages = messages.filter((message) => message.me)

    adminMessages = myMessages.filter((message) => message.role === "admin")
    userMessages = myMessages.filter((message) => message.role === "user")
  })

  afterEach(() => {
    myMessages = []
    adminMessages = []
    userMessages = []
  })

  test("모든 메시지를 출력한다", () => {
    render(
      <MyMessages
        messages={myMessages}
        role={myMessages[0].role}
      />
    )
    myMessages.forEach((message) => {
      expect(document.body).toHaveTextContent(message.text)
    })
  })

  test("마지막 메시지에만 타임스탬프를 출력한다", () => {
    const timestamp = faker.date.recent().toISOString()

    const { getByText } = render(
      <MyMessages
        messages={myMessages}
        role={myMessages[0].role}
        timestamp={new Date(timestamp).getTime()}
      />
    )

    // 타임스탬프가 한번만 출력되어야 한다
    const renderedTimestamp = getByText(
      new Date(timestamp).toLocaleTimeString()
    )

    expect(renderedTimestamp).toBeInTheDocument()

    // 마지막에 타임스탬프가 출력되어야 한다
    const lastMessage = myMessages[myMessages.length - 1]
    const lastMessageComponent = getByText(lastMessage.text)

    expect(lastMessageComponent.nextSibling).toBe(renderedTimestamp)
  })

  test("삼각뿔이 오른쪽에 위치해야 한다", () => {
    const { getByText } = render(
      <MyMessages
        messages={myMessages}
        role={myMessages[0].role}
      />
    )

    const rightTriangle =
      "after:border-l-8 after:border-y-transparent after:border-y-8 after:border-r-0"

    myMessages.forEach((message) => {
      const messageComponent = getByText(message.text)
      expect(messageComponent).toHaveClass(rightTriangle)
    })
  })

  test("관리자라면 뱃지를 처음 한번 출력한다", () => {
    const { getByText } = render(
      <MyMessages
        messages={adminMessages}
        role="admin"
      />
    )

    const badge = getByText("Admin")

    expect(badge).toBeInTheDocument()
  })

  test("관리자가 아니라면 뱃지를 출력하지 않는다", () => {
    const { queryByText } = render(
      <MyMessages
        messages={userMessages}
        role="user"
      />
    )

    const badge = queryByText("Admin")

    expect(badge).toBeNull()
  })
})

describe("OtherMessages", () => {
  let otherMessages: Message[]

  let adminMessages: Message[]
  let userMessages: Message[]
  beforeEach(() => {
    otherMessages = messages.filter((message) => !message.me)
    adminMessages = otherMessages.filter((message) => message.role === "admin")
    userMessages = otherMessages.filter((message) => message.role === "user")
  })

  afterEach(() => {
    otherMessages = []
    adminMessages = []
    userMessages = []
  })

  test("모든 메시지를 출력한다", () => {
    render(
      <OtherMessages
        messages={otherMessages}
        role={otherMessages[0].role}
      />
    )
    otherMessages.forEach((message) => {
      expect(document.body).toHaveTextContent(message.text)
    })
  })

  test("마지막 메시지에만 타임스탬프를 출력한다", () => {
    const timestamp = faker.date.recent().toISOString()

    const { getByText } = render(
      <OtherMessages
        messages={otherMessages}
        role={otherMessages[0].role}
        timestamp={new Date(timestamp).getTime()}
      />
    )

    // 타임스탬프가 한번만 출력되어야 한다
    const renderedTimestamp = getByText(
      new Date(timestamp).toLocaleTimeString()
    )

    expect(renderedTimestamp).toBeInTheDocument()

    // 마지막에 타임스탬프가 출력되어야 한다
    const lastMessage = otherMessages[otherMessages.length - 1]
    const lastMessageComponent = getByText(lastMessage.text)

    expect(lastMessageComponent.nextSibling).toBe(renderedTimestamp)
  })

  test("삼각뿔이 왼쪽에 위치해야 한다", () => {
    const { getByText } = render(
      <OtherMessages
        messages={otherMessages}
        role={otherMessages[0].role}
      />
    )

    const leftTriangle =
      "after:border-r-8 after:border-y-transparent after:border-y-8 after:border-l-0"

    otherMessages.forEach((message) => {
      const messageComponent = getByText(message.text)
      expect(messageComponent).toHaveClass(leftTriangle)
    })
  })

  test("관리자라면 뱃지를 처음 한번 출력한다", () => {
    const { getByText } = render(
      <OtherMessages
        messages={adminMessages}
        role="admin"
      />
    )

    const badge = getByText("Admin")

    expect(badge).toBeInTheDocument()
  })

  test("관리자가 아니라면 뱃지를 출력하지 않는다", () => {
    const { queryByText } = render(
      <OtherMessages
        messages={userMessages}
        role="user"
      />
    )

    const badge = queryByText("Admin")

    expect(badge).toBeNull()
  })
})
