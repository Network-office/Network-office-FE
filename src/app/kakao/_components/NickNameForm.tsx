import Button from "@/_common/_components/Button"
import { Input } from "@/components/ui/input"
import { useUserSignInContext } from "@/app/kakao/login/signinContext"
import { useSession } from "next-auth/react"
import { useEffect } from "react"

const NickNameForm = ({ onSubmit }: { onSubmit?: () => void }) => {
  const { setUser, nickname } = useUserSignInContext()
  const data = useSession()

  const userName = data.data?.user.kakao_account.profile.nickname

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col space-y-4">
        <Input
          defaultValue={userName}
          onChange={(e) => {
            setUser({
              nickname: e.target.value,
              social_id: "",
              social_type: "kakao",
              profile_image_url: "",
              phone_number: "010-0000-0000"
            })
          }}
          placeholder="닉네임을 입력하세요"
          className="border rounded p-2 w-[350px]"
        />
        <Button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 rounded">
          다음
        </Button>
      </form>
    </div>
  )
}

export default NickNameForm
