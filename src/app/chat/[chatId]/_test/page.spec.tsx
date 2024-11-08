import ChatPage from "@/app/chat/[chatId]/page"
import { describe, expect, jest, test } from "@jest/globals"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { ReactNode } from "react"
import {
  mockPublish,
  subscribeCallback
} from "../../../../../__mocks__/@stomp/stompjs"
import { SocketMessageResponse } from "@/app/chat/[chatId]/_components/types"
import { act } from "react-dom/test-utils"
import { generateMyMessage } from "@/mock/mockData/chatMessageData"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 0
    }
  }
})

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

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

describe("ChatPage", () => {
  test("이전 대화 내용을 불러옵니다", async () => {
    render(<ChatPage params={{ chatId: "adminMe" }} />, {
      wrapper
    })

    await waitFor(() => {
      const messageGroups = screen.getAllByLabelText("메세지 그룹")
      expect(messageGroups.length).toBeGreaterThan(1)
    })
  })

  test("대화 내용이 없을 때", async () => {
    render(<ChatPage params={{ chatId: "empty" }} />, {
      wrapper
    })

    await waitFor(() => {
      const messageGroups = screen.queryAllByLabelText("메세지 그룹")
      expect(messageGroups.length).toBe(0)
    })
  })

  test("메세지 전송이 가능합니다", async () => {
    render(<ChatPage params={{ chatId: "adminMe" }} />, {
      wrapper
    })

    const input = screen.getByLabelText("메세지 입력")
    fireEvent.change(input, { target: { value: "안녕하세요" } })

    const button = screen.getByLabelText("메세지 전송 버튼")
    fireEvent.click(button)

    const userId = "5909c522-8202-4ef3-9c99-e2774c673279"

    await waitFor(() => {
      expect(mockPublish).toBeCalledWith({
        destination: "/app/chat/adminMe",
        body: JSON.stringify({ text: "안녕하세요", userId })
      })
    })
  })

  test("메세지 전송 후 입력값이 초기화됩니다", async () => {
    render(<ChatPage params={{ chatId: "adminMe" }} />, {
      wrapper
    })

    const input = screen.getByLabelText("메세지 입력")
    fireEvent.change(input, { target: { value: "안녕하세요" } })

    const button = screen.getByLabelText("메세지 전송 버튼")
    fireEvent.click(button)

    await waitFor(() => {
      expect(input).toHaveValue("")
    })
  })

  test("메세지 수신 시 대화 내용이 추가됩니다", async () => {
    render(<ChatPage params={{ chatId: "adminMe" }} />, {
      wrapper
    })

    // 이전 대화 내용을 불러옵니다
    await waitFor(() => {
      const messageGroups = screen.getAllByLabelText("메세지 그룹")
      expect(messageGroups.length).toBeGreaterThan(1)
    })

    // 메세지 수신
    const recivedText = "안녕하세요"
    const socketMessageResponse: SocketMessageResponse =
      generateMyMessage(recivedText)

    act(() =>
      subscribeCallback({ body: JSON.stringify(socketMessageResponse) })
    )

    await waitFor(() => {
      const messageContentList = screen.getAllByLabelText("메세지 내용")
      // 마지막 메세지가 추가되었는지 확인
      expect(
        messageContentList[messageContentList.length - 1]
      ).toHaveTextContent(recivedText)
    })
  })
})
