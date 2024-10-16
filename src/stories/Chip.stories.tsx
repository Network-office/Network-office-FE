import { Meta, StoryFn } from "@storybook/react"
import Chips from "@/_common/_components/Chips"

export default {
  title: "component/Chip",
  component: Chips.Chip,
  argTypes: {
    id: { control: "text", description: "칩의 고유 ID" },
    label: { control: "text", description: "칩에 표시될 텍스트" },
    color: {
      control: { type: "select", options: ["default", "primary", "secondary"] },
      description: "칩의 색상"
    },
    className: { control: "text", description: "추가적인 CSS 클래스" },
    isSelected: { control: "boolean", description: "선택 여부" },
    onSelect: { action: "selected" }
  }
} as Meta<typeof Chips.Chip>

const Template: StoryFn<typeof Chips.Chip> = (args) => <Chips.Chip {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "기본 칩",
  color: "default",
  isSelected: false
}

export const Selected = Template.bind({})
Selected.args = {
  ...Default.args,
  label: "선택된 칩",
  isSelected: true
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  ...Default.args,
  label: "커스텀 스타일 칩",
  className: "bg-gradient-to-r from-purple-400 to-pink-500 text-white"
}
