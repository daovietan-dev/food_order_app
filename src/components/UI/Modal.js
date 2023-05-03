import React from 'react'
import classes from './Modal.module.css'
import { createPortal } from 'react-dom'

const Backdrop = ({ onClick }) => {
  return <div className={classes.backdrop} onClick={onClick}></div>
}

const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>{children}</div>
}

const Modal = ({ children, onHideCart }) => {
  const overlayPortal = document.getElementById(`overlays`)

  return (
    <>
      {createPortal(<Backdrop onClick={onHideCart} />, overlayPortal)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, overlayPortal)}
    </>
  )
}

export default Modal
