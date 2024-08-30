import { LucideIcon } from "lucide-react"
import type { ButtonProps as ShadcnButtonProps } from "../../components/ui/button"
import type { InputProps as ShadcnInputProps } from "../../components/ui/input"

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
  title: string
  leftContent?: React.ReactNode
  rightContent?: React.ReactNode
}
