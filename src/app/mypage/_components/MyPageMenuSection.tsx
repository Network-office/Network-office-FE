"use client"

import useModal from "@/_common/_hooks/useModal"
import { useRouter } from "next/navigation"
import LikdeMeetingModal from "./LikdeMeetingModal"
import { useVerifyPhoneCode } from "@/app/kakao/_hooks/_mutations/useVerifiyPhone"
import { PhoneInputModal } from "@/app/kakao/_components/PhoneInputModal"

const MyPageMenuSection = () => {
  const router = useRouter()
  const getVerifyPhoneCode =
    typeof window !== "undefined" &&
    localStorage.getItem("networkoffice-phone-verify")
  const { ModalComponent, setModalOpen, setModalClose } = useModal()
  const {
    ModalComponent: PhoneVerificationModalComponent,
    setModalOpen: setPhoneModalOpen,
    setModalClose: setPhoneModalClose
  } = useModal()

  const { mutate: verifyPhoneCode } = useVerifyPhoneCode()

  return (
    <div className="w-[88%] mx-auto mt-[30px] ">
      <h1 className="text-lg font-semibold mb-[10px] ml-1">메뉴</h1>
      <button
        onClick={setModalOpen}
        className="w-full h-[60px] border-[1px] text-slate-500 text-left px-4 font-semibold text-lg rounded-t-md">
        내가 찜한 모임 목록
      </button>
      {getVerifyPhoneCode !== "true" && (
        <button
          className="w-full h-[60px] border-[1px] text-slate-500  text-left px-4 font-semibold text-lg"
          onClick={setPhoneModalOpen}>
          핸드폰 인증
        </button>
      )}

      <PhoneVerificationModalComponent>
        <PhoneInputModal
          onConfirm={(phoneNum) => {
            setTimeout(() => {
              verifyPhoneCode(
                { phoneNumber: phoneNum.replaceAll("-", "") },
                {
                  onSuccess: () => {
                    typeof window !== "undefined" &&
                      localStorage.setItem("networkoffice-phone-verify", "true")
                    router.refresh()
                  }
                }
              )
            }, 5000)

            setPhoneModalClose()
          }}
          onModalClose={setPhoneModalClose}
        />
      </PhoneVerificationModalComponent>
      <button className="w-full h-[60px] border-[1px] text-slate-500  text-left px-4 font-semibold text-lg">
        임시용 2
      </button>
      <ModalComponent>
        <LikdeMeetingModal onCloseModalHandle={setModalClose} />
      </ModalComponent>
    </div>
  )
}

export default MyPageMenuSection
