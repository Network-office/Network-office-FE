import ChatRoomListWithTabs from "@/app/chat/_components/ChatRoomListWithTabs"
import type { Meta, StoryObj } from "@storybook/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const meta = {
  title: "Chat/ChatRoomListWithTabs",
  component: ChatRoomListWithTabs,
  decorators: [
    (Story: React.ComponentType) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ],
  parameters: {},
  tags: ["autodocs"]
} satisfies Meta<typeof ChatRoomListWithTabs>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    defaultRole: "all"
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        pathname: "/chat",
        asPath: "/chat",
        query: {
          role: "admin"
        }
      }
    }
  }
}
