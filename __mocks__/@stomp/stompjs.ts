import { jest } from "@jest/globals"

export const mockPublish = jest.fn()
export const mockActivate = jest.fn()

export let subscribeCallback: Function

export const Client = jest.fn().mockImplementation(() => {
  return {
    onConnect: null,
    activate: jest.fn(function (this: { onConnect: Function | null }) {
      if (this.onConnect) {
        this.onConnect()
        mockActivate()
      }
    }),
    // 직접 subscribe 메서드의 콜백을 호출할 수 있도록 subscribeCallback 변수에 할당
    subscribe: jest.fn((destination, callback: Function) => {
      subscribeCallback = callback
    }),
    publish: mockPublish,
    deactivate: jest.fn()
  }
})
