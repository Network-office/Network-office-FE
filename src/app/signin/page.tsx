"use client"
import { useFunnel } from "@/_common/_hooks/useFunnel"

/*!
  회원가입 요청 흐름
  -> redirecturl -> 코드뽑고 -> oauth/kakao로 post요청
  ->사용할 닉네임 입력받기
  -> 핸드폰인증
  -> 회원가입 완료
*/
const SignIn = () => {
  const { step, popStep, pushStep, Funnel } = useFunnel(
    [
      "signInfo",
      "getIdInfo",
      "getPasswordInfo",
      "getNickNameInfo",
      "getAvatarInfo",
      "getBaseLocationInfo"
    ],
    "signInfo"
  )

  return (
    <div>
      <Funnel></Funnel>
    </div>
  )
}

export default SignIn
