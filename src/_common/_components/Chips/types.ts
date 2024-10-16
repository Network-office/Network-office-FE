import { ReactNode } from "react"

export interface ChipProps {
  label: string
  color?: "default" | "primary" | "secondary"
  className?: string
  isSelected?: boolean
  onSelect?: (id: string) => void
}
