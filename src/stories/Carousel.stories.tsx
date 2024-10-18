import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import Carousel from "@/_common/_components/Carousel"

export default {
  title: "component/Carousel",
  component: Carousel,
  argTypes: {
    autoPlay: { control: "boolean", description: "자동 재생 여부" },
    interval: { control: "number", description: "자동 재생 간격 (ms)" },
    showNavBar: { control: "boolean", description: "네비게이션 바 표시 여부" },
    navBarClassName: {
      control: "text",
      description: "네비게이션 바 추가 클래스"
    },
    className: { control: "text", description: "캐러셀 컨테이너 추가 클래스" }
  }
} as Meta<typeof Carousel>

const Template: StoryFn<typeof Carousel> = (args) => (
  <Carousel {...args}>
    <Carousel.Slide>
      <div className="h-64 bg-red-500 flex items-center justify-center text-white text-2xl">
        슬라이드 1
      </div>
    </Carousel.Slide>
    <Carousel.Slide>
      <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-2xl">
        슬라이드 2
      </div>
    </Carousel.Slide>
    <Carousel.Slide>
      <div className="h-64 bg-green-500 flex items-center justify-center text-white text-2xl">
        슬라이드 3
      </div>
    </Carousel.Slide>
  </Carousel>
)

export const Default = Template.bind({})
Default.args = {
  autoPlay: false,
  interval: 3000,
  showNavBar: true,
  navBarClassName: "",
  className: "max-w-md mx-auto"
}

export const AutoPlay = Template.bind({})
AutoPlay.args = {
  ...Default.args,
  autoPlay: true
}

export const WithoutNavBar = Template.bind({})
WithoutNavBar.args = {
  ...Default.args,
  showNavBar: false
}
