"use client"

import { ModalProps } from "../types"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

const Modal = ({
  children,
  className,
  width = 100,
  height = 100,
  modalType = "default",
  isOpen = false
}: ModalProps) => {
  console.log(isOpen)
  return createPortal(
    <div
      className={
        (cn(
          "fixed top-0 left-0 bottom-0 right-0 w-screen h-[100vh] z-20 dark:bg-gray-100/50 bg-black/50",
          isOpen ? "opacity-100" : "opacity-0"
        ),
        className)
      }
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
