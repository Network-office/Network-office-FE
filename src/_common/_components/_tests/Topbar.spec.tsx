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
    expect(screen.getByLabelText("Back")).toBeInTheDocument()
    expect(screen.getByLabelText("Profile")).toBeInTheDocument()
    expect(screen.getByLabelText("Alarm")).toBeInTheDocument
  })
})
