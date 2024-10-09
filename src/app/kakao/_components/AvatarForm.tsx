import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { useRef } from "react"
import { useSignInContext } from "@/app/kakao/_context/signinContext"
import { useSession } from "next-auth/react"
import Button from "@/_common/_components/Button"

import { useAvatarForm } from "@/app/kakao/_hooks/useAvatarForm"

const AvatarForm = ({ onSubmit }: { onSubmit?: () => void }) => {
  const { user, setUser } = useSignInContext()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { data } = useSession()
  const defaultImage = data?.user?.image ?? ""

  const { avatarSrc, handleFileChange } = useAvatarForm()

  const handleNextStep = () => {
    setUser((prevUser) => ({
      ...prevUser,
      profile_image_url: avatarSrc ?? defaultImage
    }))
    if (onSubmit) onSubmit()
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
              src={avatarSrc ?? defaultImage}
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
          <div className="flex space-x-4">
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-xl text-base font-medium transition duration-200">
              사진 업로드
            </Button>
            <Button
              onClick={handleNextStep}
              className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-xl text-base font-medium transition duration-200">
              다음
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvatarForm
