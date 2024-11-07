import Button from "@/_common/_components/Button"
import Input from "@/_common/_components/Input"
import { useSignInContext } from "@/app/kakao/_context/signinContext"

const NickNameForm = ({
  onSubmit
}: {
  onSubmit?: (nickname: string) => void
}) => {
  const { setUser, user } = useSignInContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickName = e.target.value

    if (newNickName.length <= 20) {
      setUser({
        nickName: newNickName,
        social_id: "",
        social_type: "KAKAO",
        profileImg: "",
        phone_number: ""
      })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">
          닉네임을 입력해 주세요
        </h1>
        <p className="text-base text-gray-600 mb-6">
          다른 사람들에게 보여질 이름이에요
        </p>
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => e.preventDefault()}>
          <Input
            defaultValue={user?.nickName}
            value={user?.nickName}
            onChange={handleInputChange}
            placeholder="닉네임 (2~20자)"
            className="border border-gray-300 rounded-xl p-4 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200"
          />
          <Button
            type="button"
            onClick={() => {
              if (user.nickName.length >= 2 && user.nickName.length <= 20) {
                onSubmit?.(user.nickName)
              } else {
                alert("닉네임은 2자 이상 20자 이하로 입력해 주세요.")
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl text-base font-medium transition duration-200">
            다음
          </Button>
        </form>
      </div>
    </div>
  )
}

export default NickNameForm
