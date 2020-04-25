/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Badges from "./badges"
import Ribbon from "./ribbon"
import "./layout.css"
import "./gifs.css"

const Layout = ({ children }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Arvo:wght@700&family=Fira+Mono&family=Roboto:wght@300&display=swap" rel="stylesheet" />
      <div className="overlay">
        <Header />
        <Ribbon />
        <Badges />
      </div>
      <div className="page">
        <main>{children}</main>
      </div>
      <footer>
        &copy;
          {new Date().getFullYear()} Clarice Bouwer. Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> for Gatsby.
        <Badges />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
