import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.css"

const Header = ({ siteTitle }) => (
  <div className="headerContainer">
    <div className="headerContent">
      <Link to="/" className="headerName">
        <h2>Isabelle Jordan Lavandero</h2>
      </Link>
      <Link to="/projects" id="projects_link">
        projects
      </Link>
      <a
        href="https://drive.google.com/file/d/1IrRhJ5pPYCTgcNEl25ePJ_tFJSVIS79e/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        id="resume_link"
      >
        résumé
      </a>
      <Link to="/contact" id="contact_link">
        contact
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
