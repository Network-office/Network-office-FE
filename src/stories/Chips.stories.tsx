import { Meta, StoryFn } from "@storybook/react"
import Chips from "@/_common/_components/Chips"

export default {
  title: "component/Chips",
  component: Chips,
  argTypes: {
    selectionMode: {
      control: { type: "radio", options: ["single", "multiple"] },
      description: "칩 선택 모드"
    },
    maxSelection: {
      control: "number",
      description: "최대 선택 가능한 칩의 개수"
    },
    direction: {
      control: { type: "radio", options: ["horizontal", "vertical"] },
      description: "칩 배치 방향"
    },
    onSelectionChange: { action: "selectionChanged" }
  }
} as Meta<typeof Chips>

const Template: StoryFn<typeof Chips> = (args) => (
  <div>
    <Chips {...args}>
      <Chips.Chip
        label="칩 1"
        color="primary"
      />
      <Chips.Chip
        label="칩 2"
        color="primary"
      />
      <Chips.Chip
        label="칩 3"
        color="primary"
      />
      <Chips.Chip
        label="칩 4"
        color="primary"
      />
    </Chips>
    <Chips {...args}>
      <Chips.Chip
        label="칩 1"
        color="secondary"
      />
      <Chips.Chip
        label="칩 2"
        color="secondary"
      />
      <Chips.Chip
        label="칩 3"
        color="secondary"
      />
      <Chips.Chip
        label="칩 4"
        color="secondary"
      />
    </Chips>
    <Chips {...args}>
      <Chips.Chip label="칩 1" />
      <Chips.Chip label="칩 2" />
      <Chips.Chip label="칩 3" />
      <Chips.Chip label="칩 4" />
    </Chips>
  </div>
)

const VerticalTemplate: StoryFn<typeof Chips> = (args) => (
  <Chips {...args}>
    <Chips.Chip label="칩 1" />
    <Chips.Chip label="칩 2" />
    <Chips.Chip label="칩 3" />
    <Chips.Chip label="칩 4" />
  </Chips>
)

export const Default = Template.bind({})
Default.args = {
  selectionMode: "multiple",
  maxSelection: undefined,
  direction: "horizontal"
}

export const SingleSelection = Template.bind({})
SingleSelection.args = {
  ...Default.args,
  selectionMode: "single"
}

export const LimitedSelection = Template.bind({})
LimitedSelection.args = {
  ...Default.args,
  maxSelection: 2
}

export const VerticalLayout = VerticalTemplate.bind({})
VerticalLayout.args = {
  ...Default.args,
  direction: "vertical"
}
