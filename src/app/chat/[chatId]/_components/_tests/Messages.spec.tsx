import MyMessages from "@/app/chat/[chatId]/_components/MyMessages"
import OtherMessages from "@/app/chat/[chatId]/_components/OtherMessages"
import {
  MyMessageProps,
  OtherMessageProps
} from "@/app/chat/[chatId]/_components/types"
import { faker } from "@faker-js/faker"
import { beforeEach, describe, expect, test } from "@jest/globals"
import { render } from "@testing-library/react"

// mock 데이터를 생성하는 함수들
const generateMessage = () => ({
  text: faker.lorem.sentence({
    min: 1,
    max: 10
  }),
  timestamp: new Date().getTime()
})

const generateUserInfo = () => ({
  username: faker.internet.userName(),
  avatarSrc: faker.image.avatar()
})

let myMessages: MyMessageProps
let otherMessages: OtherMessageProps

beforeEach(() => {
  myMessages = {
    role: faker.helpers.arrayElement<"user" | "admin">(["user", "admin"]),
    userInfo: generateUserInfo(),
    messages: Array.from({ length: 10 }, generateMessage)
  }

  otherMessages = {
    role: faker.helpers.arrayElement<"user" | "admin">(["user", "admin"]),
    userInfo: generateUserInfo(),
    messages: Array.from({ length: 10 }, generateMessage)
  }
})

describe("MyMessages", () => {
  test("모든 메시지를 출력한다", () => {
    render(
      <MyMessages
        messages={myMessages.messages}
        userInfo={myMessages.userInfo}
        role={myMessages.role}
      />
    )
    myMessages.messages.forEach((message) => {
      expect(document.body).toHaveTextContent(message.text)
    })
  })

  test("마지막 메시지에만 타임스탬프를 출력한다", () => {
    const timestamp = faker.date.recent().toISOString()

    myMessages.messages.forEach((message) => {
      message.timestamp = new Date(timestamp).getTime()
    })

    const { getByText } = render(
      <MyMessages
        messages={myMessages.messages}
        userInfo={myMessages.userInfo}
        role={myMessages.role}
      />
    )

    // 타임스탬프가 한번만 출력되어야 한다
    const renderedTimestamp = getByText(
      new Date(timestamp).toLocaleTimeString()
    )

    expect(renderedTimestamp).toBeInTheDocument()

    // 마지막에 타임스탬프가 출력되어야 한다
    const lastMessage = myMessages.messages[myMessages.messages.length - 1]
    const lastMessageComponent = getByText(lastMessage.text)

    expect(lastMessageComponent.nextSibling).toBe(renderedTimestamp)
  })

  test("삼각뿔이 오른쪽에 위치해야 한다", () => {
    const { getByText } = render(
      <MyMessages
        messages={myMessages.messages}
        userInfo={myMessages.userInfo}
        role={myMessages.role}
      />
    )

    const rightTriangle =
      "after:border-l-8 after:border-y-transparent after:border-y-8 after:border-r-0"

    myMessages.messages.forEach((message) => {
      const messageComponent = getByText(message.text)
      expect(messageComponent).toHaveClass(rightTriangle)
    })
  })

  test("관리자라면 뱃지를 처음 한번 출력한다", () => {
    const { getByText } = render(
      <MyMessages
        messages={myMessages.messages}
        userInfo={myMessages.userInfo}
        role="admin"
      />
    )

    const badge = getByText("Admin")

    expect(badge).toBeInTheDocument()
  })

  test("관리자가 아니라면 뱃지를 출력하지 않는다", () => {
    const { queryByText } = render(
      <MyMessages
        messages={myMessages.messages}
        userInfo={myMessages.userInfo}
        role="user"
      />
    )

    const badge = queryByText("Admin")

    expect(badge).toBeNull()
  })
})

describe("OtherMessages", () => {
  test("모든 메시지를 출력한다", () => {
    render(
      <OtherMessages
        messages={otherMessages.messages}
        role={otherMessages.role}
        userInfo={otherMessages.userInfo}
      />
    )
    otherMessages.messages.forEach((message) => {
      expect(document.body).toHaveTextContent(message.text)
    })
  })

  test("마지막 메시지에만 타임스탬프를 출력한다", () => {
    const timestamp = faker.date.recent().toISOString()

    otherMessages.messages.forEach((message) => {
      message.timestamp = new Date(timestamp).getTime()
    })

    const { getByText } = render(
      <OtherMessages
        messages={otherMessages.messages}
        role={otherMessages.role}
        userInfo={otherMessages.userInfo}
      />
    )

    // 타임스탬프가 한번만 출력되어야 한다
    const renderedTimestamp = getByText(
      new Date(timestamp).toLocaleTimeString()
    )

    expect(renderedTimestamp).toBeInTheDocument()

    // 마지막에 타임스탬프가 출력되어야 한다
    const lastMessage =
      otherMessages.messages[otherMessages.messages.length - 1]
    const lastMessageComponent = getByText(lastMessage.text)

    expect(lastMessageComponent.nextSibling).toBe(renderedTimestamp)
  })

  test("삼각뿔이 왼쪽에 위치해야 한다", () => {
    const { getByText } = render(
      <OtherMessages
        messages={otherMessages.messages}
        role={otherMessages.role}
        userInfo={otherMessages.userInfo}
      />
    )

    const leftTriangle =
      "after:border-r-8 after:border-y-transparent after:border-y-8 after:border-l-0"

    otherMessages.messages.forEach((message) => {
      const messageComponent = getByText(message.text)
      expect(messageComponent).toHaveClass(leftTriangle)
    })
  })

  test("관리자라면 뱃지를 처음 한번 출력한다", () => {
    const { getByText } = render(
      <OtherMessages
        messages={otherMessages.messages}
        role="admin"
        userInfo={otherMessages.userInfo}
      />
    )

    const badge = getByText("Admin")

    expect(badge).toBeInTheDocument()
  })

  test("관리자가 아니라면 뱃지를 출력하지 않는다", () => {
    const { queryByText } = render(
      <OtherMessages
        messages={otherMessages.messages}
        role="user"
        userInfo={otherMessages.userInfo}
      />
    )

    const badge = queryByText("Admin")

    expect(badge).toBeNull()
  })
})
