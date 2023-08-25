import React, { useEffect } from "react"
import "./Modal.css"

const Modal = ({ user, onClose }) => {
  useEffect(() => {
    const closeModalOnOutsideClick = (event) => {
      if (event.target.id === "modal") {
        onClose()
      }
    }

    window.addEventListener("click", closeModalOnOutsideClick)

    return () => {
      window.removeEventListener("click", closeModalOnOutsideClick)
    }
  }, [onClose])

  if (!user) return null

  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{user.last_name}</h2>
        <p>{user.employment.title}</p>
        <p>{user.employment.key_skill}</p>
        {/* Render other user details as needed */}
      </div>
    </div>
  )
}

export default Modal
