import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { useState, useRef } from "react"
import { useSignInContext } from "@/app/kakao/_context/signinContext"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

const AvatarForm = () => {
  const { setUser, user } = useSignInContext()
  const [avatarSrc, setAvatarSrc] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const data = useSession()
  const defaultImage = data.data?.user?.image || ""

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setAvatarSrc(base64String)
        setUser((prevUser) => ({
          ...prevUser,
          profile_image_url: base64String
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md text-center bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">
          {user.nickname}님의 프로필 사진
        </h1>
        <p className="text-base text-gray-600 mb-6">
          프로필 사진을 선택해 주세요
        </p>
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage
              src={avatarSrc || defaultImage}
              alt="userImage"
            />
          </Avatar>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl text-base font-medium transition duration-200">
            사진 선택
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AvatarForm
