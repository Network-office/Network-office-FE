import { useState, ChangeEvent, useEffect } from "react"
import { DEFAULT_IMAGE_LIST } from "../constants"

export const useAvatarForm = () => {
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * DEFAULT_IMAGE_LIST.length)
    setAvatarSrc(DEFAULT_IMAGE_LIST[randomIndex].icon)
  }, [])

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
