import { describe, expect, it, jest } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import Topbar from "../Topbar"

describe("Topbar 컴포넌트", () => {
  it("title과 left, right Contents를 렌더링 해야한다.", () => {
    render(
      <Topbar
        title="Test Topbar"
        leftContent={<Topbar.BackLink />}
        rightContent={
          <>
            <Topbar.ProfileLink />
            <Topbar.AlarmLink />
          </>
        }
      />
    )

    expect(screen.getByText("Test Topbar")).toBeInTheDocument()
    expect(screen.getByLabelText("Back")).toBeInTheDocument()
    expect(screen.getByLabelText("Profile")).toBeInTheDocument()
    expect(screen.getByLabelText("Alarm")).toBeInTheDocument
  })
})
