import Button from "@/_common/_components/Button"
import Input from "@/_common/_components/Input"
import Tooltip from "@/_common/_components/Tooltip"
import { Meta, StoryObj } from "@storybook/react"
import { FormEvent, useState } from "react"

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
    defaultOpen: true
  }
}

export const WithInput: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState("")

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      if (content === "") {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }

    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <Tooltip
          {...args}
          content="input is required"
          side="top"
          open={open}>
          <Input
            label="Input"
            iconPosition="right"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Tooltip>
      </form>
    )
  },
  args: {
    content: "Tooltip content",
    children: <Button>Trigger</Button>,
    side: "top"
  }
}
