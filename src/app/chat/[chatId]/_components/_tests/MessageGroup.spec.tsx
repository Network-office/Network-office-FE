import { faker } from "@faker-js/faker"
import { beforeEach, describe, expect, test } from "@jest/globals"
import { render } from "@testing-library/react"
import MyMessageGroup, { MyMessageGroupProps } from "../MyMessageGroup"
import OtherMessageGroup, { OtherMessageGroupProps } from "../OtherMessageGroup"

// mock 데이터를 생성하는 함수들
const generateMessage = () => ({
  id: faker.string.uuid(),
  text: faker.lorem.sentence({
    min: 1,
    max: 10
  }),
  timestamp: new Date().getTime()
})

const generateUserInfo = () => ({
  id: faker.string.uuid(),
  username: faker.internet.userName(),
  avatarSrc: faker.image.avatar()
})

let myMessageGroup: MyMessageGroupProps
let otherMessageGroup: OtherMessageGroupProps

beforeEach(() => {
  myMessageGroup = {
    role: faker.helpers.arrayElement<"user" | "admin">(["user", "admin"]),
    userInfo: generateUserInfo(),
    messages: Array.from({ length: 10 }, generateMessage)
  }

  otherMessageGroup = {
    role: faker.helpers.arrayElement<"user" | "admin">(["user", "admin"]),
    userInfo: generateUserInfo(),
    messages: Array.from({ length: 10 }, generateMessage)
  }
})

describe("MyMessageGroup", () => {
  test("모든 메시지를 출력한다", () => {
    render(
      <MyMessageGroup
        messages={myMessageGroup.messages}
        userInfo={myMessageGroup.userInfo}
        role={myMessageGroup.role}
      />
    )
    myMessageGroup.messages.forEach((message) => {
      expect(document.body).toHaveTextContent(message.text)
    })
  })

  test("마지막 메시지에만 타임스탬프를 출력한다", () => {
    const timestamp = faker.date.recent().toISOString()

    myMessageGroup.messages.forEach((message) => {
      message.timestamp = new Date(timestamp).getTime()
    })

    const { getByText } = render(
      <MyMessageGroup
        messages={myMessageGroup.messages}
        userInfo={myMessageGroup.userInfo}
        role={myMessageGroup.role}
      />
    )

    // 타임스탬프가 한번만 출력되어야 한다
    const renderedTimestamp = getByText(
      new Date(timestamp).toTimeString().slice(0, 8)
    )

    expect(renderedTimestamp).toBeInTheDocument()

    // 마지막에 타임스탬프가 출력되어야 한다
    const lastMessage =
      myMessageGroup.messages[myMessageGroup.messages.length - 1]
    const lastMessageComponent = getByText(lastMessage.text)

    expect(lastMessageComponent.nextSibling).toBe(renderedTimestamp)
  })

  test("삼각뿔이 오른쪽에 위치해야 한다", () => {
    const { getByText } = render(
      <MyMessageGroup
        messages={myMessageGroup.messages}
        userInfo={myMessageGroup.userInfo}
        role={myMessageGroup.role}
      />
    )

    const rightTriangle =
      "after:border-l-8 after:border-y-transparent after:border-y-8 after:border-r-0"

    myMessageGroup.messages.forEach((message) => {
      const messageComponent = getByText(message.text)
      expect(messageComponent).toHaveClass(rightTriangle)
    })
  })

  test("관리자라면 뱃지를 처음 한번 출력한다", () => {
    const { getByText } = render(
      <MyMessageGroup
        messages={myMessageGroup.messages}
        userInfo={myMessageGroup.userInfo}
        role="admin"
      />
    )

    const badge = getByText("Admin")

    expect(badge).toBeInTheDocument()
  })

  test("관리자가 아니라면 뱃지를 출력하지 않는다", () => {
    const { queryByText } = render(
      <MyMessageGroup
        messages={myMessageGroup.messages}
        userInfo={myMessageGroup.userInfo}
        role="user"
      />
    )

    const badge = queryByText("Admin")

    expect(badge).toBeNull()
  })
})

describe("OtherMessageGroup", () => {
  test("모든 메시지를 출력한다", () => {
    render(
      <OtherMessageGroup
        messages={otherMessageGroup.messages}
        role={otherMessageGroup.role}
        userInfo={otherMessageGroup.userInfo}
      />
    )
    otherMessageGroup.messages.forEach((message) => {
      expect(document.body).toHaveTextContent(message.text)
    })
  })

  test("마지막 메시지에만 타임스탬프를 출력한다", () => {
    const timestamp = faker.date.recent().toISOString()

    otherMessageGroup.messages.forEach((message) => {
      message.timestamp = new Date(timestamp).getTime()
    })

    const { getByText } = render(
      <OtherMessageGroup
        messages={otherMessageGroup.messages}
        role={otherMessageGroup.role}
        userInfo={otherMessageGroup.userInfo}
      />
    )

    // 타임스탬프가 한번만 출력되어야 한다
    const renderedTimestamp = getByText(
      new Date(timestamp).toTimeString().slice(0, 8)
    )

    expect(renderedTimestamp).toBeInTheDocument()

    // 마지막에 타임스탬프가 출력되어야 한다
    const lastMessage =
      otherMessageGroup.messages[otherMessageGroup.messages.length - 1]
    const lastMessageComponent = getByText(lastMessage.text)

    expect(lastMessageComponent.nextSibling).toBe(renderedTimestamp)
  })

  test("삼각뿔이 왼쪽에 위치해야 한다", () => {
    const { getByText } = render(
      <OtherMessageGroup
        messages={otherMessageGroup.messages}
        role={otherMessageGroup.role}
        userInfo={otherMessageGroup.userInfo}
      />
    )

    const leftTriangle =
      "after:border-r-8 after:border-y-transparent after:border-y-8 after:border-l-0"

    otherMessageGroup.messages.forEach((message) => {
      const messageComponent = getByText(message.text)
      expect(messageComponent).toHaveClass(leftTriangle)
    })
  })

  test("관리자라면 뱃지를 처음 한번 출력한다", () => {
    const { getByText } = render(
      <OtherMessageGroup
        messages={otherMessageGroup.messages}
        role="admin"
        userInfo={otherMessageGroup.userInfo}
      />
    )

    const badge = getByText("Admin")

    expect(badge).toBeInTheDocument()
  })

  test("관리자가 아니라면 뱃지를 출력하지 않는다", () => {
    const { queryByText } = render(
      <OtherMessageGroup
        messages={otherMessageGroup.messages}
        role="user"
        userInfo={otherMessageGroup.userInfo}
      />
    )

    const badge = queryByText("Admin")

    expect(badge).toBeNull()
  })
})
