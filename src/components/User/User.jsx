import React, { useEffect, useState } from "react"
import axios from "axios"
import "./user.css" // Use kebab-case for file names

function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://random-data-api.com/api/v2/users?size=10&is_xml=true"
      )
      setUsers(response.data)
    }

    fetchUsers()
  }, [])

  const toggleShowEmail = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, showEmail: !user.showEmail } : user
      )
    )
  }

  return (
    <div className="card wrap">
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <div className="userpic-container">
            <img src={user.avatar} alt="profile pic" className="avatar" />
          </div>
          <div className="usertext-container">
            <h4 className="user-title">
              {user.first_name} | <span id="gender">{user.gender}</span>{" "}
            </h4>

            <p
              onMouseEnter={() => toggleShowEmail(user.id)}
              onMouseLeave={() => toggleShowEmail(user.id)}
            >
              {user.showEmail ? user.email : `Contact ${user.first_name}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default User
