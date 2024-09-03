"use client"
import useModal from "@/_common/_hooks/useModal"

export default function Home() {
  const { isModalOpen, setModalOpen, setModalClose, ModalComponent } =
    useModal()
  return (
    <main className="mx-4">
      <ModalComponent>
        <p className="test">모달 모달 모달</p>
      </ModalComponent>
      <p>모달 상태 : {isModalOpen ? "참" : "거짓"}</p>
      <button onClick={() => setModalOpen()}>버튼</button>
      <button onClick={() => setModalClose()}>버튼</button>
    </main>
  )
}
