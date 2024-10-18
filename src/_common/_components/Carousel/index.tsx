"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/_common/_components/Carousel/Shadcn_Carousel"

type CarouselProps = {
  children: React.ReactNode
  showArrows?: boolean
  autoPlay?: boolean
  interval?: number
  showNavBar?: boolean
  navBarClassName?: string
  className?: string
}

const Carousel = ({
  children,
  autoPlay = false,
  showNavBar = false,
  interval = 3000,
  navBarClassName,
  className
}: CarouselProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (api && autoPlay) {
      const autoPlayInterval = setInterval(() => {
        api.scrollNext()
      }, interval)

      return () => clearInterval(autoPlayInterval)
    }
  }, [api, autoPlay, interval])

  return (
    <div className={`relative ${className}`}>
      <ShadcnCarousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true
        }}>
        <CarouselContent>{children}</CarouselContent>
      </ShadcnCarousel>
      {showNavBar && (
        <div
          className={cn(
            "mt-1 absolute left-0 right-0 flex justify-center gap-2",
            navBarClassName
          )}>
          {[...Array(count)].map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all bg-black dark:bg-white${
                index === current ? " w-4" : ""
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const CarouselSlide = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => {
  return <CarouselItem className={className}>{children}</CarouselItem>
}

Carousel.Slide = CarouselSlide

export default Carousel
