"use client"

import { ModalProps } from "../types"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

const Modal = ({
  children,
  width = 100,
  height = 100,
  position = "none",
  modalType = "default",
  isOpen = false,
  className
}: ModalProps) => {
  return createPortal(
    <div
      className={cn(
        "fixed top-0 left-0 bottom-0 right-0 w-screen h-[100vh] z-20 dark:bg-gray-100/50 bg-black/50",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
        position
          ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          : "",
        className
      )}
      style={{
        width: `${modalType === "fullScreen" ? "100%" : `${width}px`}`,
        height: `${modalType === "fullScreen" ? "100%" : `${height}px`}`
      }}>
      {children}
    </div>,
    document.body
  )
}

export default Modal
