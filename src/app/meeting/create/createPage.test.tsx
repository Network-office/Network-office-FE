import createMeeting from "./_api/createMeeting"
import { expect, describe, it } from "@jest/globals"

// 수정중.

describe("Create Meeting API", () => {
  it("성공적으로 모임을 생성하고 성공 응답을 반환해야 한다", async () => {
    const mockMeetingData = {
      title: "테스트 모임",
      category: "스포츠",
      place: "서울",
      detailPlace: "어딘가",
      x: 127,
      y: 37,
      startTime: 1,
      endTime: 2,
      date: "2024-09-15",
      peopleNumber: 10,
      detail: "테스트 설명"
    }

    const response = (await createMeeting(mockMeetingData)) as {
      success: boolean
    }

    expect(response.success).toBe(true)
  })

  it("유효하지 않은 데이터가 제공되었을 때 오류를 발생시켜야 한다", async () => {
    const invalidMeetingData = {
      title: "",
      category: "스포츠",
      place: "서울",
      detailPlace: "어딘가",
      x: 127,
      y: 37,
      startTime: 1,
      endTime: 2,
      date: "2024-09-15",
      peopleNumber: 10,
      detail: "테스트 설명"
    }

    await expect(createMeeting(invalidMeetingData)).rejects.toThrow(
      "필드가 유효하지 않음"
    )
  })
})
