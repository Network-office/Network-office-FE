import ChatRoomPage from "@/app/chat/page"
import { QueryProvider } from "@/app/provider"
import { describe, expect, jest, test } from "@jest/globals"
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react"
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime.js"

const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn()
}
describe("ChatRoomPage", () => {
  test("채팅방 목록이 렌더링되고 aria-label이 '-link'를 포함하는 링크들이 존재한다", async () => {
    const { getAllByLabelText } = render(
      <AppRouterContext.Provider value={mockRouter}>
        <QueryProvider>
          <ChatRoomPage searchParams={{ role: undefined }} />
        </QueryProvider>
      </AppRouterContext.Provider>
    )

    await waitFor(() => {
      const linkElements = getAllByLabelText(/-link/i)
      expect(linkElements.length).toBeGreaterThan(0)
    })
  })

  test("필터링 테스트 tab 으로 목록이 필터링된다", async () => {
    const { getByText } = render(
      <AppRouterContext.Provider value={mockRouter}>
        <QueryProvider>
          <ChatRoomPage searchParams={{ role: undefined }} />
        </QueryProvider>
      </AppRouterContext.Provider>
    )

    await waitFor(() => {
      const filterTab = getByText("소장")
      fireEvent.click(filterTab)

      const chatRoomList = screen.getByLabelText("chat-room-list")
      expect(chatRoomList.childElementCount).toBeGreaterThan(0)
    })
  })

  test("무한 스크롤로 데이터 fetch 가 된다", async () => {
    const { getByText } = render(
      <AppRouterContext.Provider value={mockRouter}>
        <QueryProvider>
          <ChatRoomPage searchParams={{ role: undefined }} />
        </QueryProvider>
      </AppRouterContext.Provider>
    )

    let initialLength = 0
    await waitFor(() => {
      const chatRoomList = screen.getByLabelText("chat-room-list")
      initialLength = chatRoomList.childElementCount
      expect(initialLength).toBeGreaterThan(0)
    })

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 1000 } })
    })

    await waitFor(() => {
      const chatRoomList = screen.getByLabelText("chat-room-list")
      expect(chatRoomList.childElementCount).toBeGreaterThan(initialLength)
    })
  })
})
