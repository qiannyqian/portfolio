import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>, Cute React SVG components
      by{` `}
      <a href="https://react-kawaii.now.sh/">React Kawaii</a>{" "}
    </div>
    {/* <div>
      <a>Twitter</a>
      <a>Github</a>
      <a>CV</a>
    </div> */}
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
