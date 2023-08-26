import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="nav-container">
      <ul id="ul-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/more">Other projects</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
