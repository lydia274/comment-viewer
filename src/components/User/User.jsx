import React, { useEffect, useState } from "react"
import axios from "axios"
import "./User.css"

async function fetchUsers() {
  const response = await axios.get(
    "https://random-data-api.com/api/v2/users?size=10&is_xml=true"
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
    <div className="wrap card">
      <div>
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <div>
              <img src={user.avatar} alt="profile pic" />
            </div>
            <div>
              <h3>
                {user.first_name} | <span id="gender">{user.gender}</span>
              </h3>

              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
