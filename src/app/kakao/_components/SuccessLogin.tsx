import Image from "next/image"
import SuccessImage from "../../../../public/successLogin.jpg"
import { useRouter } from "next/navigation"
import Button from "@/_common/_components/Button"

export const SuccessLogin = ({
  onLoginSuccess
}: {
  onLoginSuccess?: () => void
}) => {
  const router = useRouter()

  const handleMoveToMeeting = () => {
    if (onLoginSuccess) {
      onLoginSuccess()
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md text-center bg-white rounded-3xl shadow-lg p-8">
        <div className="mb-6">
          <Image
            src={SuccessImage}
            width={200}
            height={200}
            alt="로그인 성공 UI"
            className="mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">로그인 성공!</h1>
        <p className="text-lg text-gray-600 mb-8">
          환영합니다. 성공적으로 로그인되었습니다.
        </p>
        <Button
          onClick={handleMoveToMeeting}
          className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl text-base font-medium transition duration-200">
          미팅 페이지로 이동
        </Button>
      </div>
    </div>
  )
}
