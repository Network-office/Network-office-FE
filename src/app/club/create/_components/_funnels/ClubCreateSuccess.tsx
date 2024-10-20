import Link from "next/link"
import Button from "@/_common/_components/Button"

const ClubCreateSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">동호회 생성 완료!</h1>
      <p className="text-lg text-center mb-8">
        새로운 동호회가 성공적으로 생성되었습니다.
      </p>
      <Link href="/club">
        <Button>동호회 목록으로</Button>
      </Link>
    </div>
  )
}

export default ClubCreateSuccess
