import { Link } from "gatsby"

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
        <div
          style={{
            padding: `10px`,
          }}
        ></div>
        <h4 style={{ margin: 0 }}>
          <Link className="emoji" to="/">
            🚀
          </Link>

          <Link to="/about" className="padding-left">
            About
          </Link>

          <Link to="/blog/" className="padding-left">
            Blog
          </Link>
        </h4>
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
