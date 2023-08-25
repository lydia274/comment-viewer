import React from "react"
import "./Modal.css"

const Modal = ({ user, onClose }) => {
  if (!user) return null

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }

  return (
    <div className="modal">
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
