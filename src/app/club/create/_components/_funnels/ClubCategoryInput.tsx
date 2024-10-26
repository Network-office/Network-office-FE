"use client"

import { useFormContext } from "react-hook-form"
import Button from "@/_common/_components/Button"
import { useState } from "react"
import Chips from "@/_common/_components/Chips"

interface ClubCategoryInputProps {
  onNextStep: () => void
}

const categories = [
  "스포츠",
  "문화",
  "예술",
  "음악",
  "독서",
  "요리",
  "여행",
  "게임"
]

const ClubCategoryInput = ({ onNextStep }: ClubCategoryInputProps) => {
  const { setValue } = useFormContext()
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const handleCategoryChange = (selected: string[]) => {
    setValue("category", selected[0])
    setSelectedCategory(selected[0])
  }

  const handleNextStep = () => {
    if (selectedCategory) {
      onNextStep()
    }
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold text-center mb-16">
        동호회 분야를 선택해주세요
      </h1>
      <Chips
        onSelectionChange={handleCategoryChange}
        selectionMode="single"
        className="grid grid-cols-4 justify-center gap-1">
        {categories.map((category) => (
          <Chips.Chip
            color="primary"
            key={category}
            label={category}
            className="w-[65px] text-center"
            isSelected={selectedCategory === category}
          />
        ))}
      </Chips>
      <Button
        onClick={handleNextStep}
        disabled={!selectedCategory}
        className="mt-12 w-[40%]">
        다음
      </Button>
    </div>
  )
}

export default ClubCategoryInput
