import useChatScroll from "@/app/chat/[chatId]/_hooks/useChatScroll"
import { describe, test, jest, expect } from "@jest/globals"
import { render, fireEvent, waitFor, act } from "@testing-library/react"

const callbackSpy = jest.fn()
// @ts-ignore
global.IntersectionObserver = jest.fn((callback, options) => {
  callbackSpy.mockImplementation(callback as any)
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn(),
    callback
  }
})

global.HTMLElement.prototype.scrollIntoView = jest.fn()

interface Item {
  id: string
  text: string
}

const MockComponentList = ({ data }: { data: Item[] }) => {
  const { BottomDiv, ScrollDown } = useChatScroll([data])

  return (
    <div>
      <ScrollDown aria-label="scroll-down-button">
        {data.map((item) => (
          <div
            className="h-[30%]"
            key={item.id}>
            {item.text}
          </div>
        ))}
      </ScrollDown>
      <BottomDiv aria-label="bottom-div" />
    </div>
  )
}

describe("useChatScroll", () => {
  test("ScrollDown 버튼 클릭 시, 화면이 아래로 스크롤 되어야 한다.", async () => {
    const data = new Array(100).fill(0).map((_, index) => ({
      id: index.toString(),
      text: index.toString()
    }))

    const { getByLabelText } = render(<MockComponentList data={data} />)
    act(() => {
      callbackSpy([{ isIntersecting: false }])
    })

    const bottomDiv = getByLabelText("bottom-div")

    await waitFor(() => {
      const scrollDownButton = getByLabelText("scroll-down-button")
      fireEvent.click(scrollDownButton)
    })

    // 아래로 스크롤이 호출 됐는지 확인
    expect(bottomDiv.scrollIntoView).toHaveBeenCalled()
  })
})
