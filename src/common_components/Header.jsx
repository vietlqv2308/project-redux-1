import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav>
      <ul className="nav nav-pills justify-content-center d-flex">
        <li role="presentation" className="active">
          <Link to="/">Home</Link>
        </li>
        <li role="presentation">
          <Link to="/product">Product</Link>
        </li>
        <li role="presentation">
          <Link to="/user">User</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
