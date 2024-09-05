import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { describe, it, expect } from "@jest/globals"
import React from "react"
import useModal from ".."

const ModalTestComponent = () => {
  const { ModalComponent, setModalOpen, setModalClose } = useModal()

  return (
    <div>
      <button
        onClick={setModalOpen}
        data-testid="open-modal">
        Open Modal
      </button>
      <ModalComponent>
        <div>
          <p>Modal Content</p>
          <button
            onClick={setModalClose}
            data-testid="close-modal">
            Close Modal
          </button>
        </div>
      </ModalComponent>
    </div>
  )
}

describe("Modal Component", () => {
  it("isOpen이 false일 때 모달이 렌더링되지 않아야 한다", () => {
    render(<ModalTestComponent />)

    expect(screen.queryByText("Modal Content")).toBeNull()
  })

  it("isOpen이 true일 때 모달이 렌더링되어야 한다", () => {
    render(<ModalTestComponent />)

    fireEvent.click(screen.getByTestId("open-modal"))

    expect(screen.queryByText("Modal Content")).toBeInTheDocument()
  })

  it("오버레이를 클릭하면 모달이 닫혀야 한다", async () => {
    render(<ModalTestComponent />)

    fireEvent.click(screen.getByTestId("open-modal"))

    expect(screen.getByText("Modal Content")).toBeInTheDocument()

    fireEvent.click(screen.getByRole("modal"))

    await waitFor(() => {
      expect(screen.queryByText("Modal Content")).toBeNull()
    })
  })

  it("모달 내부를 클릭해도 모달이 닫히지 않아야 한다", () => {
    render(<ModalTestComponent />)

    fireEvent.click(screen.getByTestId("open-modal"))

    fireEvent.click(screen.getByText("Modal Content"))

    expect(screen.queryByText("Modal Content")).toBeInTheDocument()
  })
})
