'use client'

import { useRef } from 'react'
import { IconButton } from '../IconButton'
import { Chat } from '../icons/Chat'
import { Modal } from '../Modal'
import styles from './commentmodal.module.css'

export const ModalComment = () => {
  const modalRef = useRef(null)
  return (
    <>
      <Modal ref={modalRef}>
        <h1>Olá mundo!</h1>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  )
}
