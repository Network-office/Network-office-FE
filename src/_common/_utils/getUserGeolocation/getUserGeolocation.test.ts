import getUserGeolocation from "."
import { getUserGeolocationResponseType, LocationResponseType } from "./types"
import { describe, it, beforeEach, jest, expect } from "@jest/globals"

describe("getUserGeolocation", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("GeoLocation 연결 후 올바른 위치를 반환하는지 검사", async () => {
    const mockPosition = {
      coords: {
        latitude: 37.7749,
        longitude: -122.4194
      }
    } as LocationResponseType

    const mockGeolocation = {
      getCurrentPosition: jest
        .fn()
        .mockImplementationOnce((success: any) => success(mockPosition))
    }

    Object.defineProperty(global.navigator, "geolocation", {
      value: mockGeolocation,
      configurable: true
    })

    const expectedResult: getUserGeolocationResponseType = {
      ok: true,
      position: { lat: 37.7749, lng: -122.4194 }
    }

    const result = await getUserGeolocation()
    expect(result).toEqual(expectedResult)
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalledTimes(1)
  })

  it("사용자가 위치 정보 제공 거절하여 실패하는 경우", async () => {
    const mockError = {
      message: "사용자가 위치정보제공을 거부했습니다"
    }

    const mockGeolocation = {
      getCurrentPosition: jest
        .fn()
        .mockImplementationOnce((_, error: any) => error(mockError))
    }

    Object.defineProperty(global.navigator, "geolocation", {
      value: mockGeolocation,
      configurable: true
    })

    const expectedResult = {
      ok: false,
      errorMessage: "사용자가 위치정보제공을 거부했습니다"
    }

    await expect(getUserGeolocation()).rejects.toEqual(expectedResult)
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalledTimes(1)
  })
})
