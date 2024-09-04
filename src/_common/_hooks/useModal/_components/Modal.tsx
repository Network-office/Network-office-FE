"use client"

import { ModalProps } from "../types"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const overlayColorList = {
  black: "bg-black",
  gray: "bg-black/50",
  white: "bg-white"
}

const Modal = ({
  children,
  width = 100,
  height = 100,
  modalType = "default",
  isOpen = false,
  overlayColor = "gray",
  close,
  className
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(isOpen)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      requestAnimationFrame(() => setIsAnimating(true))
    } else {
      setIsAnimating(false)
      setIsVisible(false)
    }
  }, [isOpen])

  if (!isVisible) return null

  return createPortal(
    <div
      onClick={close}
      className={cn(
        "fixed inset-0 z-20 bg-black/50 transition-opacity duration-500 ease-in-out",
        isAnimating && isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
        overlayColorList[overlayColor]
      )}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "absolute transition-transform duration-500 ease-in-out",
          isAnimating && isOpen ? "scale-100" : "scale-95",
          className
        )}
        style={{
          width: `${modalType === "fullScreen" ? "100%" : `${width}px`}`,
          height: `${modalType === "fullScreen" ? "100%" : `${height}px`}`
        }}>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
