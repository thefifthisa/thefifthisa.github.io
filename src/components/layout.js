/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `3rem auto`,
          maxWidth: 1024,
          padding: `0 1.0875rem`,
          display: `grid`,
          gridTemplateRows: `1fr`,
          alignItems: `center`,
          justifyItems: `center`,
        }}
      >
        <main style={{ placeSelf: `center` }}>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()} • Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
