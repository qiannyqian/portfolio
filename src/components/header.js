import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaCodepen } from "react-icons/fa"

import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
        <h3 style={{ margin: 0 }}>
          <Link className="emoji" to="/">
            <span>🚀</span>
          </Link>

          <Link to="/about" className="padding-left">
            About
          </Link>

          <Link to="/blog/" className="padding-left">
            Blog
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
