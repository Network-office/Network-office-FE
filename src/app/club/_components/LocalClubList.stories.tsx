import type { Meta, StoryObj } from "@storybook/react"
import LocalClubList from "./LocalClubList"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { http, HttpResponse } from "msw"

const queryClient = new QueryClient()

const meta: Meta<typeof LocalClubList> = {
  title: "Club/LocalClubList",
  component: LocalClubList,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ],
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/club/local`, () => {
          return HttpResponse.json({
            clubList: [
              {
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
              },
              {
                clubId: "6666",
                name: "지역 봉사 동아리",
                imageUrl: null,
                meetingFrequency: "매월 첫째 주 일요일",
                genre: "봉사",
                location: {
                  city: "서울시",
                  district: "강남구",
                  neighborhood: "역삼동"
                }
              }
            ]
          })
        })
      ]
    }
  }
}

export default meta
type Story = StoryObj<typeof LocalClubList>

export const Default: Story = {}

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/club/local`, () => {
          return HttpResponse.json({ clubList: [] })
        })
      ]
    }
  }
}
