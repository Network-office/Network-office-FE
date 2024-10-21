import { render, act } from "@testing-library/react"
import { describe, it, jest, expect } from "@jest/globals"
import useInfiniteScroll from "../index"

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

const UseInfiniteScrollTestComponent = () => {
  const { ref } = useInfiniteScroll(() => {})

  return <div ref={ref}>test</div>
}

describe("useInfiniteScroll", () => {
  it("refetch가 호출되면 잘 동작하는가?", () => {
    render(<UseInfiniteScrollTestComponent />)

    act(() => {
      callbackSpy([{ isIntersecting: true }])
    })

    expect(callbackSpy).toHaveBeenCalled()
  })
})
