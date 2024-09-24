import Button from "@/_common/_components/Button"
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

export const Primary: Story = {
  args: {
    content: "Tooltip content",
    children: <Button>Trigger</Button>,
    side: "top"
  }
}

export const WithArrow: Story = {
  args: {
    content: "Tooltip content",
    children: <Button>Trigger</Button>,
    side: "top",
    arrow: true
  }
}

export const AutoOpen: Story = {
  args: {
    content: "Tooltip content",
    children: <Button>Trigger</Button>,

    side: "top",
    autoOpen: true
  }
}
