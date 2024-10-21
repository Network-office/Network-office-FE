import { Meta, StoryObj } from "@storybook/react"
import { useFunnel } from "@/_common/_hooks/useFunnel"

const meta: Meta = {
  title: "Hooks/useFunnel",
  parameters: {
    layout: "centered"
  }
}

export default meta

type Story = StoryObj<typeof useFunnel>

const FunnelDemo = () => {
  const steps = ["Step 1", "Step 2", "Step 3"]
  const { Funnel, setStep, pushStep, popStep } = useFunnel(steps)

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">useFunnel 훅</h2>
      <div className="mb-4"></div>
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => setStep("Step 1")}
          className="px-2 py-1 bg-blue-500 text-white rounded">
          setStep(Step 1)
        </button>
        <button
          onClick={() => setStep("Step 2")}
          className="px-2 py-1 bg-blue-500 text-white rounded">
          setStep(Step 2)
        </button>
        <button
          onClick={() => setStep("Step 3")}
          className="px-2 py-1 bg-blue-500 text-white rounded">
          setStep(Step 3)
        </button>
        <button
          onClick={pushStep}
          className="px-2 py-1 bg-green-500 text-white rounded">
          pushStep
        </button>
        <button
          onClick={popStep}
          className="px-2 py-1 bg-red-500 text-white rounded">
          popStep
        </button>
      </div>

      <Funnel>
        <Funnel.Step name="Step 1">
          <div className="p-4  h-[100px] bg-gray-100 rounded">Funnel 1</div>
        </Funnel.Step>
        <Funnel.Step name="Step 2">
          <div className="p-4  h-[100px] bg-gray-100 rounded">Funnel 2</div>
        </Funnel.Step>
        <Funnel.Step name="Step 3">
          <div className="p-4  h-[100px] bg-gray-100 rounded">Funnel 3</div>
        </Funnel.Step>
      </Funnel>
    </div>
  )
}

export const Default: Story = {
  render: () => <FunnelDemo />
}
