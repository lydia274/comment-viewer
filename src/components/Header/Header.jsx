import React from "react"
import Nav from "../Nav/Nav"
import "./Header.css"

function Header(props) {
  return (
    <div id="header-title">
      <h1 id="header-text">Extraterrestrial and Extraordinary</h1>
      <p id="header-highlight">The first interstellar mingling portal</p>
      <Nav />
    </div>
  )
}

export default Header
