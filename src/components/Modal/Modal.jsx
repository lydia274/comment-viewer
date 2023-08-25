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

        <div className="portrait-container">
          <div>
            <img src={user.avatar} id="portrait-pic" />
          </div>
          <div className="portrait-title">
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p>Born on {user.date_of_birth}</p>
          </div>
        </div>

        <div id="profile-intro">
          <p>
            Meet {user.first_name} {user.last_name}, a dynamic extraterrestral{" "}
            {user.gender} individual from {user.address.city}, state{" "}
            {user.address.state}, {user.address.country}.
          </p>
          <p>
            As a {user.employment.title}, {user.first_name} is known for their
            tremendous {user.employment.key_skill} skills.
          </p>
          <p>
            Enthusiastic explorer of {user.address.country}'s landscapes,{" "}
            {user.first_name} finds peace in nature's embrace.
          </p>
          <p>
            Reach out to {user.first_name} via email at {user.email} or on the
            phone at {user.phone_number}.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal
