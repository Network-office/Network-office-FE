"use client"
import DropBox from "@/_common/_components/DropBox"

export default function Home() {
  return (
    <div>
      <DropBox
        title="메뉴"
        triggerText="열기"
        items={[
          { label: "옵션 1", onClick: () => console.log("옵션 1 선택됨") },
          { label: "옵션 2", onClick: () => console.log("옵션 2 선택됨") }
        ]}
        contentClassName="bg-white shadow-lg"
        labelClassName="font-bold text-lg"
        itemClassName="hover:bg-gray-100"
      />
    </div>
  )
}
