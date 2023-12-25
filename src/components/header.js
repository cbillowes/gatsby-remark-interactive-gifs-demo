import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <div className="container">
      <h1>
        <Link to="/">Embed interactive gifs into Gatsby</Link>
      </h1>
      <code>npm i gatsby-remark-interactive-gifs</code>
    </div>
  </header>
)

export default Header
