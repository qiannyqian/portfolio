import { Link } from "gatsby"
import Image from "../components/image"
import { Planet } from "react-kawaii"

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
      <div>
        <div
          style={{
            padding: `20px`,
          }}
        >
          <Planet size={50} mood="excited" color="#FCCB7E"></Planet>
        </div>
        <h4 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            qian.codes
          </Link>

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
