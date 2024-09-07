import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import React from "react"
import Meeting from "../page"
import { describe, expect, it } from "@jest/globals"

describe("Meeting Component", () => {
  // Given: Mock 데이터를 기반으로 Meeting 컴포넌트를 렌더링
  it("should render meeting list correctly", async () => {
    render(<Meeting />)

    // When: 모임 리스트 데이터가 API로부터 로드된 후
    const meetings = await screen.findAllByText(/칠 사람 구해요/)

    // Then: 3개의 모임 리스트가 렌더링 되어야 한다
    expect(meetings).toHaveLength(3)
  })

  // Given: 사용자가 마커를 클릭
  it("should open modal when marker is clicked", async () => {
    render(<Meeting />)

    // When: 모임 리스트가 렌더링된 후
    const marker = await screen.findByText("축구 칠 사람 구해요")

    // 모임 마커 클릭
    fireEvent.click(marker)

    // Then: 모임 정보 모달이 열려야 한다
    const modalTitle = await screen.findByText("축구 칠 사람 구해요")
    expect(modalTitle).toBeInTheDocument()
  })

  // Given: MSW가 API 호출을 모킹
  it("should fetch and display meeting data", async () => {
    render(<Meeting />)

    // When: Mock API가 호출되고 데이터가 로드된 후
    await waitFor(() => {
      expect(screen.getByText("축구 칠 사람 구해요")).toBeInTheDocument()
    })

    // Then: 다른 모임들도 렌더링 되어야 한다
    expect(screen.getByText("배드민턴 칠 사람 구해요")).toBeInTheDocument()
    expect(screen.getByText("테니스 칠 사람 구해요")).toBeInTheDocument()
  })

  // Given: 모임 상세보기를 클릭
  it("should navigate to meeting detail when '모임 상세보기' is clicked", async () => {
    render(<Meeting />)

    // When: 모임 정보 모달이 열리고, 모임 상세보기 버튼 클릭
    const marker = await screen.findByText("축구 칠 사람 구해요")
    fireEvent.click(marker)

    const detailButton = await screen.findByText("모임 상세보기")
    fireEvent.click(detailButton)

    // Then: 모임 상세 페이지로 이동해야 한다 (라우팅 확인)
    expect(window.location.pathname).toBe("/meeting-detail")
  })
})
