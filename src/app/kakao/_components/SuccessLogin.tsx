import Image from "next/image"
import SuccessImage from "../../../../public/successLogin.jpg"

import Button from "@/_common/_components/Button"
import useModal from "@/_common/_hooks/useModal"
import { useSignInContext } from "@/app/kakao/_context/signinContext"
import { PhoneInputModal } from "./PhoneInputModal"

export const SuccessLogin = ({
  onLoginSuccess
}: {
  onLoginSuccess?: () => void
}) => {
  const { setModalOpen, ModalComponent, setModalClose } = useModal()
  const { setUser, user } = useSignInContext()

  const handleMoveToMeeting = () => {
    onLoginSuccess?.()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md text-center bg-white rounded-3xl shadow-lg p-8 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mb-6">
            <Image
              src={SuccessImage}
              width={200}
              height={200}
              alt="로그인 성공 UI"
              className="mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            로그인 성공!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            환영합니다. 성공적으로 로그인되었습니다.
          </p>
          <div className="flex flex-col gap-4 w-full">
            <Button
              onClick={handleMoveToMeeting}
              className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-sm text-base font-medium transition duration-200">
              미팅 페이지로 이동
            </Button>
          </div>
        </div>
      </div>

      {!user.phone_number && (
        <ModalComponent
          className="fixed inset-0 flex items-center justify-center"
          overlayColor="white">
          <PhoneInputModal
            onConfirm={(phoneNumber) => {
              setUser((prevUser) => ({
                ...prevUser,
                phone_number: phoneNumber
              }))
            }}
            onModalClose={setModalClose}
          />
        </ModalComponent>
      )}
    </div>
  )
}
