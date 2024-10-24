import { Toast as ShadcnToast } from "@/components/ui/toast"
import { ToastClose } from "@/components/ui/toast"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface ToastProps {
  children?: ReactNode
  message?: string
  title?: string
  width?: string
  height?: string
}

const Toast = ({ children, message, title, width, height }: ToastProps) => {
  return (
    <ShadcnToast
      role="statusToast"
      className={cn(
        width ? `w-[${width}px]` : "w-[200px]",
        height ? `h-[${height}px]` : "h-[50px]"
      )}>
      {children ? (
        children
      ) : (
        <div className="flex">
          <div className="grid gap-1">
            {title && <p className="font-semibold">{title}</p>}
            {message && <p>{message}</p>}
          </div>
        </div>
      )}
      <ToastClose className="absolute top-[1px] right-[2px]" />
    </ShadcnToast>
  )
}

export default Toast
