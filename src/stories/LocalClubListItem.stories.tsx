import type { Meta, StoryObj } from "@storybook/react"
import LocalClubListItem from "@/app/club/_components/LocalClubListItem"
import { ClubItemTypes } from "@/app/club/types"

const meta: Meta<typeof LocalClubListItem> = {
  title: "Club/LocalClubListItem",
  component: LocalClubListItem,
  decorators: [
    (Story) => (
      <div className="w-[90%] mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Story />
        </div>
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof LocalClubListItem>

const mockClubItem: ClubItemTypes = {
  clubId: "5555",
  name: "우리 동네 독서 모임",
  imageUrl: null,
  meetingFrequency: "격주 토요일",
  genre: "독서",
  location: {
    city: "서울시",
    district: "강남구",
    neighborhood: "역삼동"
  }
}

export const Default: Story = {
  args: {
    clubDetail: mockClubItem
  }
}

export const WithImage: Story = {
  args: {
    clubDetail: {
      ...mockClubItem,
      imageUrl: "https://picsum.photos/200/300"
    }
  }
}
