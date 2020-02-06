import { Link } from "gatsby"
import Image from "../components/image"

import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3> */}

      <div style={{ maxWidth: `30px` }}>
        <Image />
      </div>

      <h6 style={{ margin: 0, textAlign: `right` }}>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingLeft: `10px`,
          }}
        >
          About
        </Link>

        <Link
          to="/page-2/"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingLeft: `10px`,
          }}
        >
          Page 2
        </Link>

        <Link
          to="/posts/"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingLeft: `10px`,
          }}
        >
          Posts
        </Link>
      </h6>
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
