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
import GitHub from "./github"
import Twitter from "./twitter"
import Blog from "./blog"
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
        <div className="contact">
          <a className="icon" href="https://github.com/cbillowes">
            <GitHub />
          </a>
          <a className="icon" href="https://twitter.com/cbillowes">
            <Twitter />
          </a>
          <a className="icon blog" href="https://curiousprogrammer.dev">
            <Blog />
          </a>
        </div>
        <div className="baby">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a>, {" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and{" "}
          <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.{" "}
        </div>
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
