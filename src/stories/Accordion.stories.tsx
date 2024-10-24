import { Meta, StoryFn } from "@storybook/react"
import Accordion from "@/_common/_components/Accordion"

export default {
  title: "component/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: { type: "radio", options: ["single", "multiple"] },
      description: "아코디언의 타입 (단일 또는 다중 선택)"
    },
    collapsible: {
      control: "boolean",
      description: "모든 항목을 닫을 수 있는지 여부"
    },
    defaultValue: {
      control: "text",
      description: "기본적으로 열려있는 항목의 값"
    }
  }
} as Meta<typeof Accordion>

const Template: StoryFn<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <Accordion.Item value="item-1">
      <Accordion.Trigger>첫 번째 항목</Accordion.Trigger>
      <Accordion.Content>첫 번째 항목의 내용입니다.</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger>두 번째 항목</Accordion.Trigger>
      <Accordion.Content>두 번째 항목의 내용입니다.</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
      <Accordion.Trigger>세 번째 항목</Accordion.Trigger>
      <Accordion.Content>세 번째 항목의 내용입니다.</Accordion.Content>
    </Accordion.Item>
  </Accordion>
)

export const Default = Template.bind({})
Default.args = {
  type: "single",
  collapsible: true
}

export const MultipleSelection = Template.bind({})
MultipleSelection.args = {
  type: "multiple"
}

export const WithDefaultOpenItem = Template.bind({})
WithDefaultOpenItem.args = {
  type: "single",
  collapsible: true,
  defaultValue: "item-2"
}
