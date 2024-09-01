"use client"
import { useFunnel } from "@/_common/_hooks/useFunnel"
import Input from "@/_common/_components/Input"
import Button from "@/_common/_components/Button"

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
      <Funnel>
        <Funnel.Step name="signInfo">
          <div>
            <h2>회원가입 정보</h2>
            <Input placeholder="이메일 또는 전화번호" />
            <Button onClick={() => pushStep()}>다음으로</Button>
          </div>
        </Funnel.Step>

        <Funnel.Step name="getIdInfo">
          <div>
            <h2>아이디 입력</h2>
            <Input placeholder="원하는 아이디" />
            <Button onClick={() => pushStep()}>다음으로</Button>
          </div>
        </Funnel.Step>

        <Funnel.Step name="getPasswordInfo">
          <div>
            <h2>비밀번호 설정</h2>
            <Input
              type="password"
              placeholder="비밀번호"
            />
            <Button onClick={() => pushStep()}>다음으로</Button>
          </div>
        </Funnel.Step>

        <Funnel.Step name="getNickNameInfo">
          <div>
            <h2>닉네임 입력</h2>
            <Input placeholder="닉네임" />
            <Button onClick={() => pushStep()}>다음으로</Button>
          </div>
        </Funnel.Step>

        <Funnel.Step name="getAvatarInfo">
          <div>
            <h2>아바타 선택</h2>
            <Input
              type="file"
              accept="image/*"
            />
            <Button onClick={() => pushStep()}>다음으로</Button>
          </div>
        </Funnel.Step>

        <Funnel.Step name="getBaseLocationInfo">
          <div>
            <h2>기본 위치 설정</h2>
            <Input placeholder="위치" />
            <Button onClick={() => popStep()}>이전으로</Button>
            <Button
              onClick={() => {
                /* 마지막 단계 제출 로직 */
              }}>
              가입하기
            </Button>
          </div>
        </Funnel.Step>
      </Funnel>
    </div>
  )
}

export default SignIn
