import { ReactNode } from "react"

export interface ModalProps {
  overlayColor?: "gray" | "black" | "white"
  width?: number
  height?: number
  modalType?: "default" | "fullScreen"
  className?: string
  children: ReactNode
  isOpen: boolean
  close: () => void
}
