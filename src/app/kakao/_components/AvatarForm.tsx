import { AvatarImage, Avatar } from "@/components/ui/avatar"

import image from "next/image"
import { useUserSignInContext } from "@/app/kakao/login/signinContext"
import { useSession } from "next-auth/react"

const AvatarForm = () => {
  const { nickname } = useUserSignInContext()

  const data = useSession()
  const image = data.data?.user.kakao_account.profile.profile_image_url
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col space-y-4">
        <div>{nickname}님 안녕하세요</div>
        <Avatar>
          <AvatarImage
            src={image}
            alt="userImage"
          />
        </Avatar>
      </div>
    </div>
  )
}

export default AvatarForm
