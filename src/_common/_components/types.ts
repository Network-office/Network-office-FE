import { LucideIcon } from "lucide-react"
import type { ButtonProps as ShadcnButtonProps } from "../../components/ui/button"
import type { InputProps as ShadcnInputProps } from "../../components/ui/input"
import { PropsWithChildren, ReactNode } from "react"

export interface AvatarProps {
  src?: string
  alt?: string
  fallbackName: string
  size?: "sm" | "md" | "lg"
  status?: "online" | "offline"
  className?: string
}

export interface ButtonProps extends ShadcnButtonProps {
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
}

export interface InputProps extends ShadcnInputProps {
  label?: string
  error?: string
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  helper?: string
  labelClassName?: string
  helperClassName?: string
  errorClassName?: string
}

export interface TopbarProps {
  title?: string
  className?: string
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
}

export interface TooltipProps extends PropsWithChildren<{}> {
  content: ReactNode
  side: "top" | "right" | "bottom" | "left" | undefined
  sideOffset?: number
  arrow?: boolean
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  arrowClassName?: string
}
