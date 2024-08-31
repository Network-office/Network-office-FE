import { Button as ShadcnButton } from "../../components/ui/button"
import { cn } from "../../lib/utils"
import { ButtonProps } from "./types"

const Button = ({
  children,
  icon: Icon,
  iconPosition = "left",
  loading = false,
  loadingText = "로딩중...",
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonClass = cn(className, {
    "w-full": fullWidth,
    "opacity-70 cursor-not-allowed": loading
  })

  return (
    <ShadcnButton
      className={buttonClass}
      disabled={disabled || loading}
      {...props}>
      {loading ? (
        <>
          <span className="animate-spin mr-2">&#9696;</span>
          {loadingText}
        </>
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon
              className="mr-2"
              size={16}
            />
          )}
          {children}
          {Icon && iconPosition === "right" && (
            <Icon
              className="ml-2"
              size={16}
            />
          )}
        </>
      )}
    </ShadcnButton>
  )
}
export default Button
