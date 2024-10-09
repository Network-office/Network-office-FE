import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  ReactNode
} from "react"
import { ChipProps } from "./types"
import Chip from "./chip"

export interface ChipsProps {
  children: ReactNode
  selectionMode?: "single" | "multiple"
  maxSelection?: number
  onSelectionChange?: (selectedIds: string[]) => void
}

const Chips = ({
  children,
  selectionMode = "multiple",
  maxSelection,
  onSelectionChange
}: ChipsProps) => {
  const [selectedChips, setSelectedChips] = useState<string[]>([])

  const handleChipSelect = (id: string) => {
    let newSelectedChips: string[]

    if (selectionMode === "single") {
      newSelectedChips = [id]
    } else {
      if (selectedChips.includes(id)) {
        newSelectedChips = selectedChips.filter((chipId) => chipId !== id)
      } else {
        if (maxSelection && selectedChips.length >= maxSelection) {
          return
        }
        newSelectedChips = [...selectedChips, id]
      }
    }

    setSelectedChips(newSelectedChips)
    if (onSelectionChange) {
      onSelectionChange(newSelectedChips)
    }
  }

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement<ChipProps>(child)) {
      return cloneElement(child, {
        isSelected: selectedChips.includes(child.props.label),
        onSelect: handleChipSelect
      })
    }
    return child
  })

  return <div className="flex flex-wrap">{childrenWithProps}</div>
}

Chips.Chip = Chip

export default Chips
