import ChatRoomItem from "@/app/chat/_components/ChatRoomItem"
import { faker } from "@faker-js/faker"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "ChatRoomItem",
  component: ChatRoomItem,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof ChatRoomItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    room: {
      title: "Room 1",
      authorInfo: {
        name: faker.internet.userName(),
        avatarSrc: faker.image.avatar()
      },
      currentMessage: {
        content: faker.lorem.sentence(),
        timestamp: new Date().toISOString()
      },
      badge: "admin"
    }
  }
}
