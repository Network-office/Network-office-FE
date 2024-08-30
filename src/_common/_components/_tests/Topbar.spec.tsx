import { describe, expect, it, jest } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import Topbar from "../Topbar"

describe("Topbar 컴포넌트", () => {
  it("left, right 컨텐츠를 렌더링 해야한다.", () => {
    render(
      <Topbar
        title="Test Topbar"
        leftContent={<Topbar.BackLink />}
        rightContent={
          <div>
            <Topbar.ProfileLink />
            <Topbar.AlarmLink />
          </div>
        }
      />
    )

    expect(screen.getByText("Test Topbar")).toBeInTheDocument()
    expect(screen.getByText("뒤로 가기")).toBeInTheDocument()
    expect(screen.getByText("사용자")).toBeInTheDocument()
    expect(screen.getByText("알림")).toBeInTheDocument()
  })
})
