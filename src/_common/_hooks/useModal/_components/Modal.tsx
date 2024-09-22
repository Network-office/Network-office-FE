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
      role="modal"
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
        )}>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
