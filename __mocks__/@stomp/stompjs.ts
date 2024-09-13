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
    subscribe: jest.fn((destination, callback: Function) => {
      subscribeCallback = callback
    }),
    publish: mockPublish,
    deactivate: jest.fn()
  }
})
