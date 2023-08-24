import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import Colorizer from "../Colorizer"

function Nav() {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/other">more</Link>
        </li>
      </ul>
      <Colorizer />
    </div>
  )
}

export default Nav
