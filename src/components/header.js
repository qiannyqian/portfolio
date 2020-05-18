import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaCodepen } from "react-icons/fa"

import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <div>
        <h3 className="no-margin">
          <Link className="headings emoji" to="/">
            <span>🚀</span>
          </Link>

          <Link to="/about" className="headings padding-left">
            About
          </Link>

          <Link to="/blog/" className="headings padding-left">
            Blog
          </Link>

          <Link to="/projects/" className="headings padding-left">
            Projects
          </Link>

          <a
            className="icon pull-right padding-left"
            href="https://github.com/qiannyqian/"
          >
            <FaGithub />
          </a>

          <a
            className="icon pull-right padding-left"
            href="https://codepen.io/qiannyqian"
          >
            <FaCodepen />
          </a>

          <a
            className="icon pull-right padding-left"
            href="https://twitter.com/qiannyqian/"
          >
            <FaTwitterSquare />
          </a>

          <a
            className="icon pull-right padding-left"
            href="https://www.linkedin.com/in/huiqianliang/"
          >
            <FaLinkedinIn />
          </a>
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
