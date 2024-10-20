import ChatRoomItem from "@/app/chat/_components/ChatRoomItem"
import { faker } from "@faker-js/faker"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Chat/ChatRoomItem",
  component: ChatRoomItem,
  parameters: {},
  tags: ["autodocs"]
} satisfies Meta<typeof ChatRoomItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    room: {
      title: faker.lorem.sentence(),
      authorInfo: {
        name: faker.internet.userName(),
        avatarSrc: faker.image.avatar()
      },
      currentMessage: {
        content: faker.lorem.sentence(),
        timestamp: new Date().toISOString()
      },
      myRole: "admin",
      unreadCount: 3
    }
  }
}
