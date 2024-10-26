import SkeletonLoader from "@/_common/_components/SkeletonLoader"
import { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "component/SkeletonLoader",
  component: SkeletonLoader,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof SkeletonLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: "w-32 h-32"
  }
}

export const Circle: Story = {
  args: {
    className: "w-24 h-24 rounded-full"
  }
}

export const Block: Story = {
  args: {
    className: "w-64 h-16"
  }
}
