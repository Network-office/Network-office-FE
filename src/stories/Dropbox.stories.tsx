import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import DropBox from "@/_common/_components/DropBox"

export default {
  title: "Components/DropBox",
  component: DropBox,
  argTypes: {
    title: { control: "text", description: "제목 (선택사항)" },
    triggerText: { control: "text", description: "트리거 버튼 텍스트" },
    items: { control: "object", description: "드롭다운 항목 목록" },
    triggerClassName: {
      control: "text",
      description: "트리거 버튼 클래스 이름"
    },
    contentClassName: { control: "text", description: "콘텐츠 클래스 이름" },
    labelClassName: { control: "text", description: "라벨 클래스 이름" },
    itemClassName: { control: "text", description: "항목 클래스 이름" }
  }
} as Meta<typeof DropBox>

const Template: StoryFn<typeof DropBox> = (args) => <DropBox {...args} />

export const Default = Template.bind({})
Default.args = {
  triggerText: "메뉴 열기",
  items: [
    { label: "옵션 1", onClick: () => console.log("옵션 1 선택됨") },
    { label: "옵션 2", onClick: () => console.log("옵션 2 선택됨") },
    { label: "옵션 3", onClick: () => console.log("옵션 3 선택됨") }
  ]
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  ...Default.args,
  title: "메뉴 제목"
}
