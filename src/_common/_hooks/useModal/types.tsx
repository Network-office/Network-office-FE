import { ReactNode } from "react"

export interface ModalProps {
  width?: number
  height?: number
  modalType?: "default" | "fullScreen"
  position?: "none" | "center"
  className?: string
  children: ReactNode
  isOpen: boolean
}
