import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import React from "react"
import Meeting from "../page"
import { describe, expect, it, jest } from "@jest/globals"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { getUserGeolocationResponseType } from "@/_common/_utils/getUserGeolocation/types"
/*
const queryClient = new QueryClient()
const renderWithQueryClient = (children: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

jest.mock("@/_common/_utils/getUserGeolocation", () => ({
  getUserGeolocation: jest.fn()
}))

jest.mock("@/_common/_hooks/useNaverMap", () => ({
  __esModule: true,
  default: () => ({
    NaverMapComponent: () => <div>Map Component</div>,
    setMapPosition: jest.fn()
  })
}))

describe("Meeting Component", () => {
  it("마커를 클릭하면 모달이 열려야 한다", async () => {
    renderWithQueryClient(<Meeting />)

    await waitFor(() => {
      const markers = screen.getAllByRole("img")
      expect(markers.length).toBeGreaterThan(0)
    })

    const marker = screen.getAllByRole("img")[0]
    fireEvent.click(marker)

    const modalTitle = await screen.findByText("축구 칠 사람 구해요")
    expect(modalTitle).toBeInTheDocument()
  })

  it("GPS 버튼 클릭 시 위치를 가져와야 한다", async () => {
    const mockPosition: getUserGeolocationResponseType = {
      ok: true,
      position: { lat: 37.7749, lng: -122.4194 }
    }
    const {
      getUserGeolocation
    } = require("@/_common/_utils/getUserGeolocation")
    ;(getUserGeolocation as jest.Mock).mockResolvedValue(mockPosition as never)

    const { setMapPosition } = require("@/_common/_hooks/useNaverMap").default()

    renderWithQueryClient(<Meeting />)

    const gpsButton = screen.getByRole("button", { name: /LocateFixed/i })
    fireEvent.click(gpsButton)

    await waitFor(() => {
      expect(setMapPosition).toHaveBeenCalledWith(mockPosition.position)
    })
  })
})
*/
