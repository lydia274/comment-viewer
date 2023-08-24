import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import Colorizer from "../Colorizer"

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/other">Other links</Link>
        </li>
      </ul>
      <Colorizer />
    </div>
  )
}

export default Nav
