import { describe, it, expect } from "@jest/globals"
import { useToast } from ".."
import {
  render,
  screen,
  fireEvent,
  renderHook,
  act
} from "@testing-library/react"
import { ReactNode } from "react"

interface ToastTestCompoenntProps {
  title?: string
  description?: string
  width?: string
  height?: string
  content?: ReactNode
}

const ToastTestCompoennt = ({
  title,
  description,
  width,
  height,
  content
}: ToastTestCompoenntProps) => {
  const { toast } = useToast()

  return (
    <div>
      <button
        onClick={() => toast({ title, description, width, height, content })}>
        Toast 버튼
      </button>
    </div>
  )
}

describe("useToast 테스트", () => {
  it("Toast 함수 호출시 Toast 메세지들이 화면에 잘 뜨느지 확인", () => {
    render(
      <ToastTestCompoennt
        title={"ToastTest"}
        description={"ToastTest2"}
        width={"300"}
        height={"300"}
      />
    )
    fireEvent.click(screen.getByText("Toast 버튼"))

    expect(screen.queryByText("ToastTest"))
    expect(screen.queryByText("ToastTest2"))
  }),
    it("Toast 함수 호출시 Toast에 Content가 화면에 잘 뜨는지 확인", () => {
      render(
        <ToastTestCompoennt
          content={<p>Test</p>}
          width={"300"}
          height={"300"}
        />
      )
      fireEvent.click(screen.getByText("Toast 버튼"))

      expect(screen.queryByText("Test"))
    }),
    it("Toast 함수 호출시 Toast에 Content가 화면에 잘 뜨느지 확인", () => {
      render(
        <ToastTestCompoennt
          content={<p>Test</p>}
          width={"300"}
          height={"300"}
        />
      )
      fireEvent.click(screen.getByText("Toast 버튼"))

      expect(screen.queryByText("Test"))
    })
  it("토스트가 여러번 생성됐을 때 한개만 생성되는지 확인하는 테스트", () => {
    const { result } = renderHook(() => useToast())

    let toastId: string

    act(() => {
      const { id } = result.current.toast({
        title: "Test",
        description: "This is a test toast",
        width: "300",
        height: "100"
      })
      toastId = id
    })

    act(() => {
      result.current.toast({
        title: "New Toast",
        description: "This is an updated test toast"
      })
    })

    expect(result.current.toasts).toHaveLength(1)
    expect(result.current.toasts[0].title).toBe("New Toast")
  })
})
