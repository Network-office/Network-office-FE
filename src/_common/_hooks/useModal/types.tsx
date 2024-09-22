import { ReactNode } from "react"

export interface ModalProps {
  overlayColor?: "gray" | "black" | "white"
  className?: string
  children: ReactNode
  isOpen: boolean
  close: () => void
}
