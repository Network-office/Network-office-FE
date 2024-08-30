import {
  AvatarFallback,
  AvatarImage,
  Avatar as ShadcnAvatar
} from "../../components/ui/avatar"
import { avatarVariants } from "./styles"
import { AvatarProps } from "./types"

const Avatar = ({
  src,
  alt,
  fallbackName,
  size,
  status,
  className
}: AvatarProps) => {
  return (
    <ShadcnAvatar
      className={avatarVariants({
        size,
        status,
        className
      })}>
      <AvatarImage
        src={src}
        alt={alt}
      />
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </ShadcnAvatar>
  )
}

export default Avatar
