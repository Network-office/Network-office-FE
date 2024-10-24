import ChatPage from "@/app/chat/[chatId]/page"
import { describe, expect, test } from "@jest/globals"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { ReactNode } from "react"

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
})
