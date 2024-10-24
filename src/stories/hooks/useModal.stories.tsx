import { Meta, StoryObj } from "@storybook/react"
import useModal from "@/_common/_hooks/useModal"
import Button from "@/_common/_components/Button"

const meta: Meta = {
  title: "Hooks/useModal",
  parameters: {
    layout: "centered"
  }
}

export default meta

type Story = StoryObj<typeof useModal>

const ModalDemo = () => {
  const { ModalComponent, setModalOpen, setModalClose } = useModal()

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">useModal 훅</h2>
      <Button onClick={setModalOpen}>모달 열기</Button>
      <ModalComponent>
        <div className="p-4 bg-white rounded">
          <h3 className="text-lg font-semibold mb-2">모달 내용</h3>
          <p>이것은 useModal 훅을 사용하여 생성된 모달입니다.</p>
          <Button
            onClick={setModalClose}
            className="mt-4">
            닫기
          </Button>
        </div>
      </ModalComponent>
    </div>
  )
}

export const Default: Story = {
  render: () => <ModalDemo />
}
