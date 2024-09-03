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

  const ModalComponent = ({ children }: Omit<ModalProps, "isOpen">) => {
    return <Modal isOpen={isModalOpen}>{children}</Modal>
  }

  return { ModalComponent, isModalOpen, setModalOpen, setModalClose }
}

export default useModal
