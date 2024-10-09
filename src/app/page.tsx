"use client"
import Chips from "@/_common/_components/Chips"
import Chip from "@/_common/_components/Chips/chip"

export default function Home() {
  const handleSelectionChange = (selectedIds: string[]) => {
    console.log("Selected chips:", selectedIds)
  }

  return (
    <div>
      <Chips
        selectionMode="multiple"
        maxSelection={3}
        onSelectionChange={handleSelectionChange}>
        <Chip
          label="칩 1"
          className="custom-chip"
        />
        <Chip
          label="칩 2"
          color="primary"
        />
        <Chip
          label="칩 3"
          color="secondary"
        />
        <Chip label="칩 4" />
      </Chips>
    </div>
  )
}
