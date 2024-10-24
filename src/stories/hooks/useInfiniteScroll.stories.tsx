import { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import useInfiniteScroll from "@/_common/_hooks/useInfiniteScroll"

const meta: Meta = {
  title: "Hooks/useInfiniteScroll",
  parameters: {
    layout: "centered"
  }
}

export default meta

type Story = StoryObj<typeof useInfiniteScroll>

const InfiniteScrollDemo = () => {
  const [items, setItems] = useState<number[]>(
    Array.from({ length: 10 }, (_, i) => i + 1)
  )
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreItems = () => {
    setIsLoading(true)
    setTimeout(() => {
      const newItems = Array.from(
        { length: 10 },
        (_, i) => items.length + i + 1
      )
      setItems((prevItems) => [...prevItems, ...newItems])
      setIsLoading(false)
    }, 1000)
  }

  const { ref } = useInfiniteScroll(loadMoreItems)

  return (
    <div className="w-64 h-96 overflow-auto border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4 p-4">useInfiniteScroll 훅</h2>
      <ul className="space-y-2 p-4">
        {items.map((item) => (
          <li
            key={item}
            className="bg-gray-100 p-2 rounded">
            Item {item}
          </li>
        ))}
      </ul>
      {isLoading && <p className="text-center py-2">Loading more items...</p>}
      <div
        ref={ref}
        className="h-10"
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <InfiniteScrollDemo />
}
