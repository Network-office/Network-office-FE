import Tooltip from "@/_common/_components/Tooltip"
import { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

const meta = {
  title: "Common/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: "Tooltip content",
    children: "Hover me",
    side: "top"
  }
}
