"use client"
import useModal from "@/_common/_hooks/useModal"

export default function Home() {
  const { isModalOpen, setModalOpen, setModalClose, ModalComponent } =
    useModal()

  return (
    <main className="mx-4">
      <ModalComponent
        className="bg-gray-50 left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]"
        width={300}
        height={300}>
        <div>
          <p className="test">모달 모달 모달</p>
          <button onClick={() => setModalClose()}>버튼</button>
        </div>
      </ModalComponent>
      <p>모달 상태 : {isModalOpen ? "참" : "거짓"}</p>
      <button
        onClick={() => {
          setModalOpen()
        }}>
        버튼
      </button>
      <button onClick={() => setModalClose()}>버튼</button>
    </main>
  )
}
