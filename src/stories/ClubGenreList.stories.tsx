import type { Meta, StoryObj } from "@storybook/react"
import ClubGenreList from "@/app/club/_components/ClubGenreList"

const meta: Meta<typeof ClubGenreList> = {
  title: "Club/ClubGenreList",
  component: ClubGenreList,
  parameters: {
    layout: "centered"
  }
}

export default meta
type Story = StoryObj<typeof ClubGenreList>

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  }
}
