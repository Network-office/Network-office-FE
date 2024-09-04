"use client"
import useModal from "@/_common/_hooks/useModal"
import { useEffect } from "react"

export default function Home() {
  const { isModalOpen, setModalOpen, setModalClose, ModalComponent } =
    useModal()

  useEffect(() => {
    console.log(isModalOpen)
  }, [isModalOpen])
  return (
    <main className="mx-4">
      <ModalComponent
        className="bg-gray-50"
        width={200}
        height={200}>
        <div>
          <p className="test">모달 모달 모달</p>
        </div>
      </ModalComponent>
      <p>모달 상태 : {isModalOpen ? "참" : "거짓"}</p>
      <button
        onClick={() => {
          setModalOpen()
          console.log("open")
        }}>
        버튼
      </button>
      <button onClick={() => setModalClose()}>버튼</button>
    </main>
  )
}
