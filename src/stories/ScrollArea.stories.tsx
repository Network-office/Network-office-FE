import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { ScrollArea } from "@/_common/_components/ScrollArea"

export default {
  title: "component/ScrollArea",
  component: ScrollArea,
  argTypes: {
    className: { control: "text", description: "추가적인 CSS 클래스" },
    orientation: {
      control: { type: "radio", options: ["vertical", "horizontal"] },
      description: "스크롤바 방향"
    }
  }
} as Meta<typeof ScrollArea>

const Template: StoryFn<typeof ScrollArea> = (args) => (
  <ScrollArea {...args}>
    <div
      style={{
        padding: "20px",
        height: args.orientation === "horizontal" ? "100px" : "600px",
        width: args.orientation === "horizontal" ? "600px" : "auto"
      }}>
      <p>
        {Array(20)
          .fill("Scroll Test Scroll Test Scroll Test Scroll Test")
          .join("")}
      </p>
    </div>
  </ScrollArea>
)

export const Default = Template.bind({})
Default.args = {
  className: "h-[300px] w-[300px] rounded-md border",
  orientation: "vertical"
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  className: "h-[100px] w-[300px] rounded-md border",
  orientation: "horizontal"
}
