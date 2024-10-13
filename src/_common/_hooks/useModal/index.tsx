"use client"

import { useState } from "react"
import Modal from "./_components/Modal"
import { ModalProps } from "./types"

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const setModalOpen = () => {
    setIsModalOpen(true)
  }
  const setModalClose = () => {
    setIsModalOpen(false)
  }
  const ModalComponent = ({
    children,
    ...props
  }: Omit<ModalProps, "isOpen" | "close">) => {
    return (
      <Modal
        className="w-full h-full"
        close={setModalClose}
        isOpen={isModalOpen}
        {...props}>
        {children}
      </Modal>
    )
  }

  return { ModalComponent, isModalOpen, setModalOpen, setModalClose }
}

export default useModal
