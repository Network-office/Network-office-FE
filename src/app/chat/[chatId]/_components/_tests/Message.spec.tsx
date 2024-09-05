import { Message, MessageHeader } from "@/app/chat/[chatId]/_components/Message"
import { describe, expect, test } from "@jest/globals"
import { render } from "@testing-library/react"

describe("Message", () => {
  test("올바른 메세지를 렌더링합니다", () => {
    const { getByText } = render(<Message text="Hello, World!" />)

    expect(getByText("Hello, World!")).toBeInTheDocument()
  })

  test("올바른 타임스탬프를 렌더링합니다", () => {
    const timestamp = Date.now()

    const { getByText } = render(
      <Message
        text="Hello, World!"
        timestamp={timestamp}
      />
    )

    expect(
      getByText(new Date(timestamp).toLocaleTimeString())
    ).toBeInTheDocument()
  })

  test("컴포넌트가 정렬됩니다.", () => {
    const { container } = render(
      <Message
        text="Hello, World!"
        align="right"
      />
    )

    expect(container.firstChild).toHaveClass("items-end")
  })

  test("MessageBubble 과 타임스탬프 사이가 정렬됩니다.", () => {
    const { container } = render(
      <Message
        text="Hello, World!"
        align="right"
        timestamp={Date.now()}
      />
    )

    expect(container.firstChild?.firstChild).toHaveClass("flex-row-reverse")
  })
})

describe("MessageHeader", () => {
  test("올바른 유저네임을 렌더링합니다", () => {
    const { getByText } = render(
      <MessageHeader
        username="John Doe"
        avatarSrc="/avatar.jpg"
      />
    )

    expect(getByText("John Doe")).toBeInTheDocument()
  })

  test("올바른 배지 텍스트를 렌더링합니다", () => {
    const { getByText } = render(
      <MessageHeader
        username="John Doe"
        avatarSrc="/avatar.jpg"
        badgeText="Admin"
      />
    )

    expect(getByText("Admin")).toBeInTheDocument()
  })
})
