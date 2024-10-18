"use client"

import Carousel from "@/_common/_components/Carousel"

export default function Home() {
  return (
    <div>
      <Carousel
        autoPlay
        className="w-full max-w-xs">
        <Carousel.Slide>
          <p>Slide 1</p>
        </Carousel.Slide>
        <Carousel.Slide>
          <p>Slide 2</p>
        </Carousel.Slide>
        <Carousel.Slide>
          <p>Slide 3</p>
        </Carousel.Slide>
      </Carousel>
    </div>
  )
}
