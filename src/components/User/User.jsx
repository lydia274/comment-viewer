import React, { useEffect, useState } from "react"
import axios from "axios"
import "./User.css"
import Modal from "../Modal/Modal"

function User() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://random-data-api.com/api/v2/users?size=12&is_xml=true"
      )
      setUsers(response.data)
    }

    fetchUsers()
  }, [])

  const [selectedUser, setSelectedUser] = useState(null)

  const openModal = (user) => {
    setSelectedUser(user)
  }

  const closeModal = () => {
    setSelectedUser(null)
  }

  return (
    <div className="card wrap">
      {users.map((user) => (
        <div
          key={user.id}
          className="user-item"
          onClick={() => openModal(user)}
        >
          <div className="userpic-container">
            <img src={user.avatar} alt="profile pic" className="avatar" />
          </div>
          <div className="usertext-container">
            <h4 className="user-title">{user.first_name}</h4>
          </div>
        </div>
      ))}
      {selectedUser && <Modal user={selectedUser} onClose={closeModal} />}
    </div>
  )
}

export default User
