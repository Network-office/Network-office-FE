import { jest } from "@jest/globals"

import useStomp from "@/app/chat/[chatId]/_hooks/useStomp"
import { describe, expect, test } from "@jest/globals"
import { act, renderHook, waitFor } from "@testing-library/react"
import { Client } from "@stomp/stompjs"
import {
  mockActivate,
  mockPublish,
  subscribeCallback
} from "../../../../../../__mocks__/@stomp/stompjs"

jest.mock("@stomp/stompjs")

describe("useStomp", () => {
  test("연결이 되어야 한다", () => {
    renderHook(() => useStomp("1"))

    expect(Client).toHaveBeenCalled()
    expect(mockActivate).toHaveBeenCalled()
  })

  test("메시지를 보낼 수 있다", () => {
    const { result } = renderHook(() => useStomp("1"))

    act(() => {
      result.current.sendMessage({ id: "1", text: "test" })
    })

    expect(mockPublish).toHaveBeenCalledWith({
      destination: "/app/chat/1",
      body: '{"id":"1","text":"test"}'
    })
  })

  test("메시지를 받으면 messages 에 추가된다", async () => {
    const { result } = renderHook(() => useStomp("1"))

    act(() => {
      subscribeCallback({ body: '{"id":"1","text":"test"}' })
    })

    await waitFor(() =>
      expect(result.current.messages).toEqual([{ id: "1", text: "test" }])
    )
  })
})
