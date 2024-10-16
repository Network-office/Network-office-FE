"use client"
import Toast from "@/_common/_components/Toast"

import { useToast } from "@/_common/_hooks/useToast"
import { ToastProvider, ToastViewport } from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, content, width, height }) => {
        return (
          <Toast
            title={title}
            width={width}
            height={height}
            message={description}
            key={id}>
            {content}
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
