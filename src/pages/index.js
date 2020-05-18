import React from "react"
import ProfilePic from "../images/profile-picture.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="center-text">
      <img className="profile-pic" src={ProfilePic} />
      <br></br>
      <h3>Hi, it's Qian here!</h3>
      <p>I'm a frontend developer who has dabbled in full-stack before.</p>
      <p>
        I primarily use HTML, CSS, and JS, and right now I'm picking up React.
      </p>
      <p>
        I'm currently open to opportunities, so if you're looking for a CV, you
        can <a href="mailto:liang.huiqian@gmail.com">email me</a> for it!
      </p>
    </div>
  </Layout>
)

export default IndexPage
