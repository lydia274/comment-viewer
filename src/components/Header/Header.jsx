import React from "react"
import Nav from "../Nav/Nav"

function Header(props) {
  return (
    <div>
      <img src={props.profileImg} />
      <h1>{props.username} -- bla</h1>

      <div>**************</div>
      <Nav />
    </div>
  )
}

export default Header
