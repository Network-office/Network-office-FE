import { ReactNode } from "react"

export interface ModalProps {
  width?: number
  height?: number
  modalType?: "default" | "fullScreen"
  children: ReactNode
  className?: string
  isOpen: boolean
}

