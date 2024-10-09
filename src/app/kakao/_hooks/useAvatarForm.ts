import { useState, ChangeEvent } from "react"

export const useAvatarForm = () => {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarSrc(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return { avatarSrc, handleFileChange }
}
