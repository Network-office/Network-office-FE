import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { fn } from "@storybook/test"

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/_common/_hooks/useToast"
import Button from "@/_common/_components/Button"

export default {
  title: "Hooks/useToast",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
  },
  argTypes: {
    title: { control: "text", description: "The title of the toast" },
    description: {
      control: "text",
      description: "The description text of the toast"
    },
    width: { control: "text", description: "The width of the toast" },
    height: { control: "text", description: "The height of the toast" }
  }
} as Meta

const Template: StoryFn = (args) => {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: args.title,
      description: args.description,
      width: args.width,
      height: args.height
    })
  }

  return (
    <div>
      <Button onClick={showToast}>Show Toast!</Button>
      <Toaster />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: "Toast Title",
  description: "This is a toast message",
  width: "300",
  height: "100"
}
