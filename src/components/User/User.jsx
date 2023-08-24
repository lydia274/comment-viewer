import React, { useEffect, useState } from "react"
import axios from "axios"
import "./User.css"

async function fetchUsers() {
  const response = await axios.get(
    "https://random-data-api.com/api/v2/users?size=2&is_xml=true"
  )
  return response.data
}

function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data)
    })
  }, [])

  if (!users.length) {
    return <p>Loading...</p>
  }

  return (
    <div className="wrap">
      <div>
        <p>
          This is a block where i fetch users first names, avatars email &
          gender
        </p>
      </div>
      <div className="user-item">
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.first_name}</h3>
            <img src={user.avatar} alt="profile pic" />
            <p>{user.email}</p>
            <p>{user.gender}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
