import { Toast as ShadcnToast } from "@/components/ui/toast"

interface ToastProps {
  message: string
}

const Toast = ({ message }: ToastProps) => {
  return (
    <ShadcnToast className="rounded-sm border-[1px]">
      <p>{message}</p>
    </ShadcnToast>
  )
}

export default Toast
