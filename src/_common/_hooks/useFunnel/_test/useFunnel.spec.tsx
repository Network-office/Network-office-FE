import { describe, expect, it } from "@jest/globals"
import { act, render, screen, waitFor } from "@testing-library/react"
import { useFunnel } from ".."
import { userEvent } from "@storybook/test"

const FunnelTestComponent = () => {
  const { Funnel, step, setStep, pushStep, popStep } = useFunnel([
    "test1",
    "test2"
  ])
  return (
    <div>
      <button onClick={() => setStep("test1")}>setStep 1</button>
      <button onClick={() => setStep("test2")}>setStep 2</button>
      <button onClick={pushStep}>pushStep</button>
      <button onClick={popStep}>popStep</button>
      <Funnel>
        <Funnel.Step name="test1">
          <p>test1</p>
        </Funnel.Step>
        <Funnel.Step name="test2">
          <p>test2</p>
        </Funnel.Step>
      </Funnel>
      <p>Current step: {step}</p>
    </div>
  )
}

describe("useFunnel 퍼널이 잘 사용되는가", () => {
  it("Funnel의 최초 기본 스텝이 잘 렌더링되는가", () => {
    render(<FunnelTestComponent />)

    expect(screen.getByText("test1")).toBeInTheDocument()
    expect(screen.queryByText("test2")).not.toBeInTheDocument()
  }),
    it("Funnel의 setStep을 통해 버튼을 다른 스탭으로 변경한 경우 해당 스탭을 잘 렌더링하는가", async () => {
      render(<FunnelTestComponent />)

      expect(screen.getByText("test1")).toBeInTheDocument()

      await act(async () => {
        userEvent.click(screen.getByText("setStep 2"))
      })

      await waitFor(
        () => {
          expect(screen.getByText("test2")).toBeInTheDocument()
        },
        { timeout: 500 }
      )
    })

  it("pushStep을 통해 다음 스텝으로 이동하는가", async () => {
    render(<FunnelTestComponent />)

    expect(screen.getByText("test1")).toBeInTheDocument()

    await act(async () => {
      userEvent.click(screen.getByText("pushStep"))
    })

    await waitFor(
      () => {
        expect(screen.getByText("test2")).toBeInTheDocument()
      },
      { timeout: 500 }
    )
  })

  it("popStep을 통해 이전 스텝으로 이동하는가", async () => {
    render(<FunnelTestComponent />)

    await act(async () => {
      userEvent.click(screen.getByText("setStep 2"))
    })

    await waitFor(
      () => {
        expect(screen.getByText("test2")).toBeInTheDocument()
      },
      { timeout: 500 }
    )

    await act(async () => {
      userEvent.click(screen.getByText("popStep"))
    })

    await waitFor(
      () => {
        expect(screen.getByText("test1")).toBeInTheDocument()
      },
      { timeout: 500 }
    )
  }),
    it("첫번 째 퍼널에서 popStep쓰면 그대로 있는가? | 버그 테스트", async () => {
      render(<FunnelTestComponent />)

      expect(screen.getByText("test1")).toBeInTheDocument()

      await act(async () => {
        userEvent.click(screen.getByText("popStep"))
      })

      await waitFor(
        () => {
          expect(screen.getByText("test1")).toBeInTheDocument()
        },
        { timeout: 500 }
      )
    }),
    it("마지막 퍼널에서 pushStep쓰면 그대로 있는가? | 버그 테스트", async () => {
      render(<FunnelTestComponent />)

      expect(screen.getByText("test1")).toBeInTheDocument()

      await act(async () => {
        userEvent.click(screen.getByText("pushStep"))
      })

      await waitFor(
        () => {
          expect(screen.getByText("test2")).toBeInTheDocument()
        },
        { timeout: 500 }
      ),
        await act(async () => {
          userEvent.click(screen.getByText("pushStep"))
        })

      await waitFor(
        () => {
          expect(screen.getByText("test2")).toBeInTheDocument()
        },
        { timeout: 500 }
      )
    })
})
