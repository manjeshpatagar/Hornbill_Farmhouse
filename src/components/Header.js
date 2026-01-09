import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <h1>Royal Resort</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/details">Details</Link>
    </nav>
  </header>
)

export default Header
