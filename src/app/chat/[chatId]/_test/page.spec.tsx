import ChatPage from "@/app/chat/[chatId]/page"
import { describe, expect, test } from "@jest/globals"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { ReactNode } from "react"
import {
  mockPublish,
  subscribeCallback
} from "../../../../../__mocks__/@stomp/stompjs"
import {
  Message,
  SocketMessageRequest,
  SocketMessageResponse
} from "@/app/chat/[chatId]/_components/types"

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

  test("메세지를 보낼 수 있다", async () => {
    const chatId = "adminMe"
    render(<ChatPage params={{ chatId }} />, {
      wrapper
    })

    // 대화 내용이 불러와질 때까지 대기
    await waitFor(() => {
      const messageGroups = screen.getAllByLabelText("메세지 그룹")
      expect(messageGroups.length).toBeGreaterThan(1)
    })

    // 메세지 입력
    const input = screen.getByLabelText("메세지 입력")
    const sendButton = screen.getByLabelText("메세지 전송 버튼")

    const message = "안녕하세요!"
    fireEvent.change(input, { target: { value: message } })
    sendButton.focus()
    sendButton.click()

    const messageRequest: SocketMessageRequest = {
      text: message
    }
    expect(mockPublish).toBeCalledWith({
      destination: `/app/chat/${chatId}`,
      body: JSON.stringify(messageRequest)
    })
  })

  test("소켓 수신 메세지는 끝에 추가된다", async () => {
    const chatId = "adminMe"
    render(<ChatPage params={{ chatId }} />, {
      wrapper
    })

    // 대화 내용이 불러와질 때까지 대기
    await waitFor(() => {
      const messageGroups = screen.getAllByLabelText("메세지 그룹")
      expect(messageGroups.length).toBeGreaterThan(1)
    })

    const message = "안녕하세요!"

    const recivedMessage: SocketMessageResponse = {
      id: "1",
      message: {
        text: message,
        timestamp: new Date().getTime()
      },
      userInfo: {
        id: "1",
        username: "admin",
        avatarSrc: "https://example.com/avatar.png",
        me: false,
        role: "user"
      }
    }

    subscribeCallback({ body: JSON.stringify(recivedMessage) })

    await waitFor(() => {
      const messageList = screen.getAllByLabelText("메세지 내용")
      expect(messageList[messageList.length - 1].textContent).toContain(message)
    })
  })
})
